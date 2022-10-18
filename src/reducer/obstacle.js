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

export const Obstacle = createSlice({
  name: "Obstacle",
  initialState,
  reducers: {
    addObstacle: (state, action) => {
      if (state.value.length < 12) {
        state.value.push(action.payload);
      }
    },
  },
});

export const { addObstacle } = Obstacle.actions;

export default Obstacle.reducer;
