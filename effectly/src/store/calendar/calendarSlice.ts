import { createSlice } from "@reduxjs/toolkit";

export const calendarSlice = createSlice({
  name: "calendar",
  initialState: {
    isAddNewEventModalOpened: false,
    newEventInput: {
      name: "",
      startDate: 0,
      endDate: 0,
      isAllDay: false,
      category: "",
    },
  },
  reducers: {
    toggleAddNewEventModal: (state) => {
      state.isAddNewEventModalOpened = !state.isAddNewEventModalOpened;
    },
    addNewEvent: (state, action) => {
      const { name, startDate, endDate, isAllDay, category } = action.payload;
      state.newEventInput.name = name;
      state.newEventInput.startDate = startDate;
      state.newEventInput.endDate = endDate;
      state.newEventInput.isAllDay = isAllDay;
      state.newEventInput.category = category;
    },
  },
});

export const { toggleAddNewEventModal } = calendarSlice.actions;

export default calendarSlice.reducer;
