import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const SecondTop = createSlice({
  name: "SecondTop",
  initialState,
  reducers: {
    addSecondTop: (state, action) => {
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

export const { addSecondTop } = SecondTop.actions;

export default SecondTop.reducer;
