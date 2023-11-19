
import { db } from "@/lib/db";
import FormCreate from "./form";

const OrganizationIdPage = async () => {
  const boards = await db.board.findMany();

  return (
    <div className="flex flex-col space-y-4">
      <FormCreate />
      {boards.map((board) => (
        <div key={board.id}> Name: {board.title}</div>
      ))}
    </div>
  );
};

export default OrganizationIdPage;
