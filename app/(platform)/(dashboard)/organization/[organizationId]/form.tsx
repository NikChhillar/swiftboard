"use client";

import { createBoard } from "@/actions/create-board";
import { Button } from "@/components/ui/button";
import { FormInput } from "./input";
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
      <FormInput errors={fieldErrors} />
      <Button className="my-2" type="submit">Submit</Button>
    </form>
  );
};
// 4.15
export default FormCreate;
