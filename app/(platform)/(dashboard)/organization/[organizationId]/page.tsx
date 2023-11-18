import { create } from "@/actions/create-board";
import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";

const OrganizationIdPage = async () => {
  const boards = await db.board.findMany();

  return (
    <div className="flex flex-col space-y-4">
      <form action={create}>
        <input
          type="text"
          id="title"
          name="title"
          required
          placeholder="Name here"
          className="p-2 border border-black mx-2"
        />
        <Button type="submit">Submit</Button>
      </form>
      {boards.map((board) => (
        <div key={board.id}> Name: {board.title}</div>
      ))}
    </div>
  );
};

export default OrganizationIdPage;
