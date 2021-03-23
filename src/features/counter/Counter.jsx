import React, {useState} from "react"
import { useSelector,  } from "react-redux"
import {DeleteCounter} from "./DeleteCounter"
import { UpdateCounter } from "./UpdateCounter"

export const Counter = ({id}) => {
  const counter = useSelector((state) => state.counter.list[id])
  let [update, setUpdate] = useState(false)
  return (
    <div>
      <div className="counter" key={id}>
        <p>
          Label: "{counter.label}" | Duration: {counter.minutes} minutes
        </p>
        <DeleteCounter id={id}/>
        <button onClick={() => setUpdate(!update)}>
          {update ? "+" : "-"}
        </button>
        <UpdateCounter counterId={id} />
      </div>
    </div>
  )
}
