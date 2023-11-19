'use client'

import { create } from '@/actions/create-board'
import { Button } from '@/components/ui/button'
import React from 'react'

const FormCreate = () => {
  return (
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
  )
}

export default FormCreate