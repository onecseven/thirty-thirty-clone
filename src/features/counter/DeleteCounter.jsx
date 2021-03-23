import React from "react"
import { useDispatch } from "react-redux"
import { remove } from "./counterSlice"

export const DeleteCounter = ({ id }) => {
  const dispatch = useDispatch()
  return <button onClick={() => dispatch(remove({ id }))}>Delete</button>
}
