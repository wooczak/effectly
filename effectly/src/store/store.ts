import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./users/userSlice";
import themeReducer from "./theme/themeSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    theme: themeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
