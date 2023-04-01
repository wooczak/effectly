import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./users/userSlice";
import calendarReducer from "./calendar/calendarSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    calendar: calendarReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
