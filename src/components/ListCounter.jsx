import React from "react"
import { useSelector } from "react-redux"

export const ListCounter = () => {
  const list = useSelector((state) => state.counter.list)
  console.log(list)
  return (
    <div className="list">
      {list.map(({ label, minutes }) => {
        return (
          <div className="counter">
            <p>Label: "{label}" | Duration: {minutes} minutes</p>
          </div>
        )
      })}
    </div>
  )
}
