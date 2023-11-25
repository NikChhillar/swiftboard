"use client";

import { create } from "@/actions/create-board";
import { Button } from "@/components/ui/button";
import React from "react";
import { useFormState } from "react-dom";
import { FormInput } from "./input";

const FormCreate = () => {
  const initialState = { message: '', errors: {} };
  const [state, dispatch] = useFormState(create, initialState);

  return (
    <form action={dispatch}>
      <FormInput errors={state?.errors} />
      <Button className="my-2" type="submit">Submit</Button>
    </form>
  );
};

export default FormCreate;
