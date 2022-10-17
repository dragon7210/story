import { configureStore } from "@reduxjs/toolkit";
import Person from "../reducer/person";
import Challenge from "../reducer/challenge";
import Milestone from "../reducer/milestone";

const store = configureStore({
  reducer: {
    Person: Person,
    Challenge: Challenge,
    Milestone: Milestone,
  },
});

export default store;
