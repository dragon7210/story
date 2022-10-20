import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const FirstBottom = createSlice({
  name: "FirstBottom",
  initialState,
  reducers: {
    addFirstBottom: (state, action) => {
      let flag = true;
      let newStateValue = state.value.map((element) => {
        console.log(element);
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

export const { addFirstBottom } = FirstBottom.actions;

export default FirstBottom.reducer;
