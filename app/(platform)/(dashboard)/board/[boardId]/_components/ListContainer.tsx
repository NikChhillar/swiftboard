"use client";

import { ListWithCards } from "@/types";
import ListForm from "./ListForm";
import { useEffect, useState } from "react";
import ListItem from "./ListItem";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import { useAction } from "@/hooks/use-action";
import { updateOrderList } from "@/actions/update-list-order";
import { toast } from "sonner";
import { updateCardOrder } from "@/actions/update-card-order";

interface ListContainerProps {
  data: ListWithCards[];
  boardId: string;
}

function reorder<T>(list: T[], startIndex: number, endIndex: number) {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);

  result.splice(endIndex, 0, removed);

  return result;
}

const ListContainer = ({ data, boardId }: ListContainerProps) => {
  const [orderedData, setOrderedData] = useState(data);

  const { execute: executeListOrder } = useAction(updateOrderList, {
    onSuccess: () => {
      toast.success("List reordered...");
    },
    onError: (e) => {
      toast.error(e);
    },
  });

  const { execute: executeCardOrder } = useAction(updateCardOrder, {
    onSuccess: () => {
      toast.success("Card reordered...");
    },
    onError: (e) => {
      toast.error(e);
    },
  });

  useEffect(() => {
    setOrderedData(data);
  }, [data]);

  const onDragEnd = (result: any) => {
    const { destination, source, type } = result;

    if (!destination) {
      return;
    }

    // same position
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    // for a list
    if (type === "list") {
      const items = reorder(orderedData, source.index, destination.index).map(
        (item, index) => ({ ...item, order: index })
      );

      setOrderedData(items);

      // server action
      executeListOrder({ items, boardId });
    }

    //for a card
    if (type === "card") {
      let newOrderedData = [...orderedData];

      const sourceList = newOrderedData.find(
        (list) => list.id === source.droppableId
      );
      const destList = newOrderedData.find(
        (list) => list.id === destination.droppableId
      );

      if (!sourceList || !destList) {
        return;
      }

      if (!sourceList.cards) {
        sourceList.cards = [];
      }

      if (!destList.cards) {
        destList.cards = [];
      }

      // card in same list
      if (source.droppableId === destination.droppableId) {
        const reorderedCards = reorder(
          sourceList.cards,
          source.index,
          destination.index
        );

        reorderedCards.forEach((card, idx) => {
          card.order = idx;
        });

        sourceList.cards = reorderedCards;

        setOrderedData(newOrderedData);

        // server action
        executeCardOrder({ boardId: boardId, items: reorderedCards });

        // in another list
      } else {
        // Remove card
        const [movedCard] = sourceList.cards.splice(source.index, 1);

        movedCard.listId = destination.droppableId;

        // Add card
        destList.cards.splice(destination.index, 0, movedCard);

        sourceList.cards.forEach((card, idx) => {
          card.order = idx;
        });

        // Update the order
        destList.cards.forEach((card, idx) => {
          card.order = idx;
        });

        setOrderedData(newOrderedData);

        // server action
        executeCardOrder({ boardId: boardId, items: destList.cards });
      }
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="lists" type="list" direction="horizontal">
        {(provided) => (
          <ol
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="flex gap-x-3 h-full"
          >
            {orderedData.map((list, i) => {
              return <ListItem key={list.id} index={i} data={list} />;
            })}
            {provided.placeholder}

            <ListForm />

            <div className="flex-shrink-0 w-1"></div>
          </ol>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default ListContainer;
