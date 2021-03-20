import React, { useState } from "react"
import { useDispatch } from "react-redux"
import {add} from "../counterSlice"

export const AddCounter = () => {
  const [label, setLabel] = useState("")
  const [minutes, setMinutes] = useState(0)
  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(add({label, minutes}))
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Label:
        <input
          type="text"
          value={label}
          onChange={(e) => setLabel(e.target.value)}>
        </input>
        <input
          type="number"
          value={minutes}
          onChange={(e) => setMinutes(e.target.value)}>
        </input>
      </label>
      <input type="submit" value="Add Counter" />
    </form>
  )
}
