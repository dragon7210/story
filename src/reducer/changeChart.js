import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const ChangeChart = createSlice({
  name: "ChangeChart",
  initialState,
  reducers: {
    addChangeChart: (state, action) => {
      const { name } = action.payload;
      const lasts = state.value.filter((item) => item.name === name);
      if (lasts.length) {
        state.value = state.value.map((item) =>
          item.name === name ? { ...action.payload } : { ...item }
        );
      } else {
        state.value.push(action.payload);
      }
    },
  },
});

export const { addChangeChart } = ChangeChart.actions;

export default ChangeChart.reducer;
