import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { removeUser } from "../store/slices/userSlice";
import { fetchContacts } from "../api";
import ContactsTable from "../components/ContactsTable";
import { removeContact, setNewContact } from "../store/slices/contactsSlice";
import { SearchStatus } from "../components/SearchStatus";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { IContact } from "../models/IContact";

export default function HomePage() {
  const contacts = useAppSelector(({ contacts }) => contacts.items);
  const isLoading = useAppSelector(({ contacts }) => contacts.isLoading);
  const { isAuth, email } = useAuth();
  const dispatch = useAppDispatch();
  const [searchQuery, setSearchQuery] = React.useState("");

  React.useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!isAuth) {
      return navigate("/login");
    }
  }, [isAuth, navigate]);

  const handleAddContact = () => {
    const name = prompt("Enter name:");
    const phoneNumber = prompt("Enter phone number:");
    dispatch(setNewContact({ id: contacts.length + 1, name: name, phone: phoneNumber }));
  };

  const handleLogOut = () => {
    dispatch(removeUser());
  };
  const handleRemoveContact = (obj: IContact) => {
    dispatch(removeContact(obj));
  };

  const handleChange = React.useCallback((e) => {
    setSearchQuery(e.target.value);
  }, []);

  const filteredContacts = contacts.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <>
      <div className="container-lg">
        <h2>Contacts</h2>
        <button className="btn btn-dark" style={{ marginRight: "1rem" }} onClick={handleLogOut}>
          Log out from {email}
        </button>

        <button
          onClick={handleAddContact}
          className="btn btn-success"
          type="button"
          id="button-addon2"
        >
          Add new contact
        </button>
        <SearchStatus onSearch={handleChange} />
        {isLoading ? (
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <ContactsTable contacts={filteredContacts} onRemove={handleRemoveContact} />
        )}
      </div>
    </>
  );
}
