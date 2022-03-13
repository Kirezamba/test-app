import React, { FC } from "react";
import { IContact } from "../models/IContact";

interface ContactsTableProps {
  contacts: IContact[];
  onRemove: (arg0: any) => void;
}

const ContactsTable: FC<ContactsTableProps> = ({ contacts, onRemove }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">№</th>
          <th scope="col">Name</th>
          <th scope="col">Phone</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact: any, index: number) => (
          <tr key={contact.id}>
            <th scope="row">{index + 1}</th>
            <td>{contact.name}</td>
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
