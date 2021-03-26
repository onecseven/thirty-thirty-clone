import { createSlice } from "@reduxjs/toolkit"

/*
NOTICE: Until we move from MVP status, counters are to follow this pattern:
{
  label: string,
  minutes: number,
  timeLeft: number (minutes * 60)
*/

export const counterSlice = createSlice({
  name: "counters",
  initialState: {
    list: [], // Timer[]
    // Timer {label, minutes, timeLeft}s
  },
  reducers: {
    add: (state, action) => {
      let {label, minutes} = action.payload
      let timeLeft = minutes * 60
      let timer = {label, minutes: Number(minutes), timeLeft}
      state.list.push(timer)
      return state
    },
    remove: (state, action) => {
      let { id } = action.payload
      state.list = state.list.filter((v, i) => {
        return i != id
      })
      return state
    },
    update: (state, action) => {
      let { label, minutes, id } = action.payload
      let newList = state.list.slice()
      newList[id] = { label, minutes, timeLeft: newList[id].timeLeft}
      state.list = newList
      return state
    },
    tick: (state, action) => {
      let currentTimer = state.list[0]
      currentTimer.timeLeft--
      if (currentTimer.timeLeft <= 0) {
        currentTimer.timeLeft = currentTimer.minutes * 60
        state.list.push(state.list.shift()) //sends the top of the array to the back
      } 
      return state
    }
  },
})

// Action creators are generated for each case reducer function
export const { remove } = counterSlice.actions
export const { add } = counterSlice.actions
export const { update } = counterSlice.actions
export const { tick } = counterSlice.actions

export default counterSlice.reducer
