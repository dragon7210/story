import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const FirstTop = createSlice({
  name: "FirstTop",
  initialState,
  reducers: {
    addFirstTop: (state, action) => {
      state.value.push(action.payload);
    },
  },
});

export const { addFirstTop } = FirstTop.actions;

export default FirstTop.reducer;
