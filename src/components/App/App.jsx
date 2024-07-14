import { useState, useEffect } from "react";
import initialContacts from "../../assets/contacts.json";
import "./App.css";
import ContactForm from "./../ContactForm/ContactForm";
import SearchBox from "./../SearchBox/SearchBox";
import ContactList from "./../ContactList/ContactList";
import { nanoid } from "nanoid";

function App() {
  const [contacts, setContacts] = useState(() => {
    // get localStorage save data value 'contacts'
    const savedContacts = JSON.parse(
      window.localStorage.getItem("list-contacts")
    );
    // if data Put data LS to value 'contacts'
    if (savedContacts) {
      return savedContacts;
    }
    //return value 'contacts' empty
    return initialContacts;
  });
  // update LocalStorage with key 'list-contacts'
  useEffect(() => {
    window.localStorage.setItem("list-contacts", JSON.stringify(contacts));
  }, [contacts]);

  const [filter, setFilter] = useState("");

  const addContact = (newContact) => {
    newContact = { ...newContact, id: nanoid() };
    setContacts((prefContacts) => {
      return [...prefContacts, newContact];
    });
  };

  const deleteContact = (contactId) => {
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
      <ContactList contacts={visibleContacts} onDel={deleteContact} />
    </div>
  );
}

export default App;
