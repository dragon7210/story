import { createSlice } from "@reduxjs/toolkit";

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
  },
});

export const { addMilestone } = Milestone.actions;

export default Milestone.reducer;
