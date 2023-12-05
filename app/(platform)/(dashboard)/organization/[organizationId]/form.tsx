"use client";

import { createBoard } from "@/actions/create-board";
import { FormInput } from "@/components/form/form-input";
import FormSubmit from "@/components/form/form-submit";
import { Button } from "@/components/ui/button";
import { useAction } from "@/hooks/use-action";

const FormCreate = () => {
  const { execute, fieldErrors } = useAction(createBoard, {
    onSuccess(data) {
      console.log(data);
    },
    onError(error) {
      console.error(error);
    },
  });

  const onSubmit = (formData: FormData) => {
    const title = formData.get("title") as string;

    // console.log({ title });

    execute({ title });
  };

  return (
    <form action={onSubmit}>
      <div className="flex flex-col space-y-2">
        <FormInput id="title" label="Board title" errors={fieldErrors} />
      </div>
      <FormSubmit>Save</FormSubmit>
    </form>
  );
};
// 4.31
export default FormCreate;
