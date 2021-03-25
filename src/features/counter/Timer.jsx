import React from "react"
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { tick } from "./counterSlice"

const Timer = () => {
  const [playing, togglePlaying] = useState(false)
  const currentTimer = useSelector((state) => state.counter.list[0]) || null
  const dispatch = useDispatch()
  useEffect(() => {
    let tickInterval = setInterval(() => {
      if (playing) {
        dispatch(tick())
      }
    }, 1000)
    return () => {
      clearInterval(tickInterval)
    }
  },[playing])
  if (!currentTimer) return null
  let {timeLeft} = currentTimer

  return (
    <div>
      <button onClick={() => togglePlaying(!playing)}>
        {playing ? "||" : "▶"}
      </button>
      <h1>
        {Math.floor(timeLeft / 60)}:{Math.floor(timeLeft%60)}
      </h1>
    </div>
  )
}

export default Timer
