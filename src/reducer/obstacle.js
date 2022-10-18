import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const Obstacle = createSlice({
  name: "Obstacle",
  initialState,
  reducers: {
    addObstacle: (state, action) => {
      state.value.push(action.payload);
    },
  },
});

export const { addObstacle } = Obstacle.actions;

export default Obstacle.reducer;
