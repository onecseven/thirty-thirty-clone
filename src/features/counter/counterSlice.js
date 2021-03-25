import { createSlice } from "@reduxjs/toolkit"

/*
NOTICE: Until we move from MVP status, counters are to follow this pattern:
{
  label: string,
  minutes: number
}
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
      let timeLeft = minutes
      let timer = {label, minutes, timeLeft}
      state.list.push(timer)
    },
    remove: (state, action) => {
      let { id } = action.payload
      state.list = state.list.filter((v, i) => {
        return i != id
      })
    },
    update: (state, action) => {
      let { label, minutes, id } = action.payload
      let newList = state.list.slice()
      newList[id] = { label, minutes, timeLeft: newList[id].timeLeft}
      state.list = newList
    },
  },
})

// Action creators are generated for each case reducer function
export const { remove } = counterSlice.actions
export const { add } = counterSlice.actions
export const { update } = counterSlice.actions

export default counterSlice.reducer
