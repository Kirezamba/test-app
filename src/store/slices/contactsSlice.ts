import { createSlice } from "@reduxjs/toolkit";
import { IContact } from "../../models/IContact";

interface ContactsState {
  items: IContact[];
  isLoading: boolean;
}

const initialState: ContactsState = {
  items: [],
  isLoading: true,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setContacts: (state, action) => {
      state.isLoading = false;
      state.items = action.payload;
    },
    setNewContact: (state, action) => {
      state.items.push(action.payload);
    },
    removeContact: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    editContact: (state, action) => {
      const editableIndex = state.items.findIndex((item) => item.id === action.payload.id);
      console.log(editableIndex);

      state.items[editableIndex].name = action.payload.name;
    },
  },
});
export const { setIsLoading, setContacts, setNewContact, removeContact, editContact } =
  contactsSlice.actions;
export default contactsSlice.reducer;
