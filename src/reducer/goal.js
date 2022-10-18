import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const Goal = createSlice({
  name: "Goal",
  initialState,
  reducers: {
    addGoal: (state, action) => {
      state.value.push(action.payload);
    },
  },
});

export const { addGoal } = Goal.actions;

export default Goal.reducer;
