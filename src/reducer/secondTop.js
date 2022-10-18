import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const SecondTop = createSlice({
  name: "SecondTop",
  initialState,
  reducers: {
    addSecondTop: (state, action) => {
      state.value.push(action.payload);
    },
  },
});

export const { addSecondTop } = SecondTop.actions;

export default SecondTop.reducer;
