import { configureStore } from "@reduxjs/toolkit";
import Person from "../reducer/person";
import Challenge from "../reducer/challenge";
import Milestone from "../reducer/milestone";
import Goal from "../reducer/goal";
import Obstacle from "../reducer/obstacle";
import FirstTop from "../reducer/firstTop";
import FirstBottom from "../reducer/firstBottom";
import SecondTop from "../reducer/secondTop";
import SecondBottom from "../reducer/secondBottom";
import ChangeChart from "../reducer/changeChart";

const store = configureStore({
  reducer: {
    Person: Person,
    Challenge: Challenge,
    Milestone: Milestone,
    Goal: Goal,
    Obstacle: Obstacle,
    FirstBottom: FirstBottom,
    FirstTop: FirstTop,
    SecondBottom: SecondBottom,
    SecondTop: SecondTop,
    ChangeChart: ChangeChart,
  },
});

export default store;
