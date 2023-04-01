import { createSlice } from "@reduxjs/toolkit";

export const calendarSlice = createSlice({
  name: "calendar",
  initialState: {
    isAddNewEventModalOpened: false
  },
  reducers: {
    toggleAddNewEventModal: (state) => {
      state.isAddNewEventModalOpened = !state.isAddNewEventModalOpened
    }
  }
});

export const { toggleAddNewEventModal } = calendarSlice.actions;

export default calendarSlice.reducer;