import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const SecondBottom = createSlice({
  name: "SecondBottom",
  initialState,
  reducers: {
    addSecondBottom: (state, action) => {
      let flag = true;
      let newStateValue = state.value.map((element) => {
        if (element.nameBottom === action.payload.nameBottom) {
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

export const { addSecondBottom } = SecondBottom.actions;

export default SecondBottom.reducer;
