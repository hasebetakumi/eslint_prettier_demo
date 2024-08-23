'use client'

import { useFormState } from 'react-dom'

import { createService, updateService, createServiceReturnData } from '../_actions/services'

const initialState = {
  name: '',
  age: '',
}

export default function Services() {
  const [state, dispatch] = useFormState(createServiceReturnData, initialState)
  const updateServiceWithId = updateService.bind(null, '1')

  return (
    <>
      <h1>createService</h1>
      <form action={createService}>
        <input name="name" type="text" />
        <input name="age" type="text" />
        <button>Submit</button>
      </form>
      <h1>updateService</h1>
      <form action={updateServiceWithId}>
        <input name="name" type="text" />
        <input name="age" type="text" />
        <button>Submit</button>
      </form>
      <h1>createServiceReturnData</h1>
      <form action={dispatch}>
        <input name="name" type="text" />
        <input name="age" type="text" />
        <button>Submit</button>
      </form>
      <p>{JSON.stringify(state)}</p>
    </>
  )
}
