import { configureStore } from "@reduxjs/toolkit";
import contactsSliceReducer from "./contactsSlice";
import filterSliceReducer from "./filtersSlice";

export const store = configureStore({
  reducer: {
    contacts: contactsSliceReducer,
    filters: filterSliceReducer,
  },
});
