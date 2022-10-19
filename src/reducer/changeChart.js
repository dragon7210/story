import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const ChangeChart = createSlice({
  name: "ChangeChart",
  initialState,
  reducers: {
    addChangeChart: (state, action) => {
      return { ...action.payload };
    },
  },
});

export const { addChangeChart } = ChangeChart.actions;

export default ChangeChart.reducer;
