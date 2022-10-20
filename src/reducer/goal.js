import { createSlice } from "@reduxjs/toolkit";
function arrayRemove(arr, value) {
  return arr.filter(function (ele) {
    return ele !== value;
  });
}
const initialState = {
  value: [
    "Factor A",
    "Factor B",
    "Factor C",
    "Factor D",
    "Factor E",
    "Factor F",
    "Factor G",
    "Factor H",
  ],
};

export const Goal = createSlice({
  name: "Goal",
  initialState,
  reducers: {
    addGoal: (state, action) => {
      if (state.value.length < 12) {
        state.value.push(action.payload);
      }
    },
    removeGoal: (state, action) => {
      return { value: arrayRemove(state.value, action.payload) };
    },
  },
});

export const { addGoal,removeGoal } = Goal.actions;

export default Goal.reducer;
