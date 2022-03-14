import React, { FC } from "react";
import { IContact } from "../models/IContact";
import { IEditContact } from "../models/IEditContact";

interface ContactsTableProps {
  contacts: IContact[];
  onRemove: (arg0: IContact) => void;
  onEdit: (arg0: IEditContact) => void;
}

const ContactsTable: FC<ContactsTableProps> = ({ contacts, onRemove, onEdit }) => {
  const onRenameContact = (id: number) => {
    const newContactName = String(prompt("Enter new name:"));
    onEdit({ id: id, name: newContactName });
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">№</th>
          <th scope="col">Name</th>
          <th scope="col">Edit</th>
          <th scope="col">Phone</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact: IContact, index: number) => (
          <tr key={contact.id}>
            <th scope="row">{index + 1}</th>
            <td>{contact.name}</td>
            <td>
              <button
                onClick={() => onRenameContact(contact.id)}
                type="button"
                className="btn btn-warning btn-sm"
              >
                Edit contact
              </button>
            </td>
            <td>{contact.phone}</td>
            <td>
              <button
                onClick={() => onRemove(contact)}
                type="button"
                className="btn btn-danger btn-sm"
              >
                Remove
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ContactsTable;
