import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const SecondBottom = createSlice({
  name: "SecondBottom",
  initialState,
  reducers: {
    addSecondBottom: (state, action) => {
      state.value.push(action.payload);
    },
  },
});

export const { addSecondBottom } = SecondBottom.actions;

export default SecondBottom.reducer;
