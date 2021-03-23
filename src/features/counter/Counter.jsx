import React from "react"
import { useSelector } from "react-redux"

export const Counter = ({id}) => {
  console.log(id)
  const counter = useSelector((state) => state.counter.list[id])
  
  return (
    <div>
      <div className="counter" key={id}>
        <p>
          Label: "{counter.label}" | Duration: {counter.minutes} minutes
        </p>
      </div>
    </div>
  )
}
