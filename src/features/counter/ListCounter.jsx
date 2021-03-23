import React from "react"
import { useSelector } from "react-redux"
import { Counter } from "./Counter"

export const ListCounter = () => {
  const list = useSelector((state) => state.counter.list)
  return (
    <div className="list">
      {list.map((counter, index) => {
        return <Counter id={index} />
      })}
    </div>
  )
}
