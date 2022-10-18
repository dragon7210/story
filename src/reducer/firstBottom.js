import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const FirstBottom = createSlice({
  name: "FirstBottom",
  initialState,
  reducers: {
    addFirstBottom: (state, action) => {
      state.value.push(action.payload);
    },
  },
});

export const { addFirstBottom } = FirstBottom.actions;

export default FirstBottom.reducer;
