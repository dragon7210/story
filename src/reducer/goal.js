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

export const Goal = createSlice({
  name: "Goal",
  initialState,
  reducers: {
    addGoal: (state, action) => {
      if (state.value.length < 12) {
        state.value.push(action.payload);
      }
    },
  },
});

export const { addGoal } = Goal.actions;

export default Goal.reducer;
