import { createSlice } from '@reduxjs/toolkit'

/*
NOTICE: Until we move from MVP status, counters are to follow this pattern:
{
  label: string,
  minutes: number
}
*/

export const counterSlice = createSlice({
  name: 'counters',
  initialState: {
    list: []
  },
  reducers: {
    add: (state, action) => {
      state.list.push(action.payload)
    },
  }
})

// Action creators are generated for each case reducer function
export const { add } = counterSlice.actions

export default counterSlice.reducer