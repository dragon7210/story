import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const FirstTop = createSlice({
  name: "FirstTop",
  initialState,
  reducers: {
    addFirstTop: (state, action) => {
      let flag = true;
      let newStateValue = state.value.map((element) => {
        if (element.name === action.payload.name) {
          flag = false;
          return action.payload;
        } else {
          return element;
        }
      });
      if (flag) {
        newStateValue.push(action.payload);
      }
      return { value: newStateValue };
    },
  },
});

export const { addFirstTop } = FirstTop.actions;

export default FirstTop.reducer;
