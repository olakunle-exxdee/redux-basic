import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = {
  value: 0,
  showCounter: false,
};
export const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    add: (state, action) => {
      return {
        ...state,
        value: state.value + action.payload.value,
      };
    },
    subtract: (state, action) => {
      return {
        ...state,
        value: state.value - action.payload.value,
      };
    },
    show: (state, action) => {
      return { ...state, showCounter: !state.showCounter };
    },
  },
});

export const { add, subtract, show } = counterSlice.actions;
export default counterSlice.reducer;
