import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {update} from './counterSlice'

export const UpdateCounter = ({counterId}) => {
  const counter = useSelector(state => state.counter.list[counterId])
  const dispatch = useDispatch()
  const [label, setLabel] = useState(counter.label)
  const [minutes, setMinutes] = useState(counter.minutes)

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(update({id: counterId, label, minutes}))
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