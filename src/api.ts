import { AppDispatch } from "./store";
import axios from "axios";
import { setIsLoading, setContacts } from "./store/slices/contactsSlice";
import { IUser } from "./models/IUser";

export const fetchContacts = () => async (dispatch: AppDispatch) => {
  dispatch(setIsLoading(true));
  const { data } = await axios.get<IUser[]>("http://fakeapi.jsonparseronline.com/users");
  const contacts = data.map((item) => {
    return {
      id: item.id,
      name: item.firstName,
      phone: item.phone,
    };
  });
  dispatch(setContacts(contacts));
};
