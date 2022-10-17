import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const Milestone = createSlice({
  name: "Milestone",
  initialState,
  reducers: {
    addMilestone: (state, action) => {
      state.value.push(action.payload);
    },
  },
});

export const { addMilestone } = Milestone.actions;

export default Milestone.reducer;
