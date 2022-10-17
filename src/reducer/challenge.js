import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const Challenge = createSlice({
  name: "Challenge",
  initialState,
  reducers: {
    addChallenge: (state, action) => {
      state.value.push(action.payload);
    },
  },
});

export const { addChallenge } = Challenge.actions;

export default Challenge.reducer;
