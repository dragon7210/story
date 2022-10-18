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

export const Challenge = createSlice({
  name: "Challenge",
  initialState,
  reducers: {
    addChallenge: (state, action) => {
      if (state.value.length < 12) {
        state.value.push(action.payload);
      }
    },
  },
});

export const { addChallenge } = Challenge.actions;

export default Challenge.reducer;
