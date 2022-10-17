import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const Person = createSlice({
  name: "Person",
  initialState,
  reducers: {
    onSave: (state, actions) => {
      return { ...actions.payload };
    },
  },
});

export const { onSave } = Person.actions;

export default Person.reducer;
