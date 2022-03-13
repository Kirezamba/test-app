import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import contactsReducer from "./slices/contactsSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    contacts: contactsReducer,
  },
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
