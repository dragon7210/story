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

export const Milestone = createSlice({
  name: "Milestone",
  initialState,
  reducers: {
    addMilestone: (state, action) => {
      if (state.value.length < 12) {
        state.value.push(action.payload);
      }
    },
    removeMilestone: (state, action) => {
      return { value: arrayRemove(state.value, action.payload) };
    },
  },
});

export const { addMilestone, removeMilestone } = Milestone.actions;

export default Milestone.reducer;
