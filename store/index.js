import { configureStore } from "@reduxjs/toolkit";
import projectsReducer from "./dataSlice";
export const store = configureStore({
  reducer: {
    projects: projectsReducer,
  },
});
