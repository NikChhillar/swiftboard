import { Suspense } from "react";
import Info from "../_components/Info";
import ActivityList from "./_components/ActivityList";
import { Separator } from "@/components/ui/separator";

const ActivityPage = async () => {
  return (
    <div className="w-full">
      <Info />
      <Separator className="my-2" />
      <Suspense fallback={<ActivityList.Skeleton />}>
        <ActivityList />
      </Suspense>
    </div>
  );
};

export default ActivityPage;
