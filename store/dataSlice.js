import { createSlice } from "@reduxjs/toolkit";
export const dataSlice = createSlice({
  name: "projects",
  initialState: {
    value: [{ id: "a43zr", title: "Landing Website", link: "#" }],
  },
  reducers: {
    addProject: (state, action) => {
      state.value = [...state.value, action.payload];
    },
    deleteProject: (state, action) => {
      state.value = state.value.filter(
        (project) => project.id !== action.payload.id
      );
    },
  },
});
export const { addProject, deleteProject } = dataSlice.actions;
export default dataSlice.reducer;
