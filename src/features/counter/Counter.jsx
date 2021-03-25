import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { DeleteCounter } from "./DeleteCounter"
import { EditableComponent } from "./EditableComponent"
import { update } from "./counterSlice"

export const Counter = ({ id }) => {
  const dispatch = useDispatch()
  const counter = useSelector((state) => state.counter.list[id])
  return (
    <div>
      <div className="counter" key={id}>
        <label>
          Label:
          <EditableComponent
            type={"text"}
            defaultText={counter.label}
            afterChange={(changes) =>
              dispatch(update({ label: changes, minutes: counter.minutes, id }))
            }
          />
        </label>

        <label>
          Minutes:
          <EditableComponent
            type={"number"}
            defaultText={counter.minutes}
            afterChange={(changes) =>
              dispatch(update({ label: counter.label, minutes: Number(changes), id }))
            }
          />
        </label>
        <DeleteCounter id={id} />
      </div>
    </div>
  )
}
