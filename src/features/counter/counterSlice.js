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
    list: [],
  },
  reducers: {
    add: (state, action) => {
      state.list.push(action.payload)
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
      newList[id] = { label, minutes }
      state.list = newList
    },
  },
})

// Action creators are generated for each case reducer function
export const { remove } = counterSlice.actions
export const { add } = counterSlice.actions
export const { update } = counterSlice.actions

export default counterSlice.reducer
