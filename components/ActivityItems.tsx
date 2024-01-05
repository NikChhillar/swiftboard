import { AuditLog } from "@prisma/client";
import { Avatar, AvatarImage } from "./ui/avatar";
import { generateLogMsg } from "@/lib/generate-log-msg";
import { format } from "date-fns";

interface ActivityItemsProps {
  data: AuditLog;
}

const ActivityItems = ({ data }: ActivityItemsProps) => {
  return (
    <li className="flex items-center gap-x-2">
      <Avatar className="h-8 w-8">
        <AvatarImage src={data.userImage} />
      </Avatar>
      <div className="flex flex-col space-y-0.5">
        <p className="text-sm text-muted-foreground">
          <span className="font-semibold capitalize text-neutral-700">
            {data.userName}
          </span>
          {generateLogMsg(data)}
        </p>
        <p className="text-xs text-muted-foreground">
          {format(new Date(data.createdAt), "MMM d, yyyy 'at' h:mm a")}
        </p>
      </div>
    </li>
  );
};

export default ActivityItems;
