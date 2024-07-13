import { useState } from "react";
import initialContacts from "../../assets/contacts.json";
import "./App.css";
import ContactForm from "./../ContactForm/ContactForm";
import SearchBox from "./../SearchBox/SearchBox";
import ContactList from "./../ContactList/ContactList";

function App() {
  const [contacts, setContacts] = useState(initialContacts);
  const [filter, setFilter] = useState("");

  const addContact = (newContact) => {
    setContacts((prefContacts) => {
      return [...prefContacts, newContact];
    });
  };

  const deleteTask = (contactId) => {
    setContacts((prefContacts) => {
      return prefContacts.filter((contact) => contact.id !== contactId);
    });
  };

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <div>
      <h1>Phone book</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={visibleContacts} onDel={deleteTask} />
    </div>
  );
}

export default App;
