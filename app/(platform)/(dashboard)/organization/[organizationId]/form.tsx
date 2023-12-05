"use client";

import { createBoard } from "@/actions/create-board";
import { FormInput } from "@/components/form/form-input";
import { Button } from "@/components/ui/button";
import { useAction } from "@/hooks/use-action";

const FormCreate = () => {

  const { execute, fieldErrors } = useAction(createBoard, {
    onSuccess(data) {
      console.log(data);
    },
    onError(error) {
      console.error(error)
    },
  })

  const onSubmit = (formData: FormData) => {
    const title = formData.get('title') as string

    execute({ title })
  }

  return (
    <form action={onSubmit}>
      <div className="flex flex-col space-y-2">
        <FormInput id="title" errors={fieldErrors} />
      </div>
      <Button className="my-2" type="submit">Submit</Button>
    </form>
  );
};
// 4.15
export default FormCreate;
