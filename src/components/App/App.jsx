import { useState } from "react";
import initialContacts from "../../assets/contacts.json";
import "./App.css";
import ContactForm from "./../ContactForm/ContactForm";
import SearchBox from "./../SearchBox/SearchBox";
import ContactList from "./../ContactList/ContactList";

function App() {
  const [contacts, setContacts] = useState(initialContacts);
  return (
    <>
      <h1>Phone book</h1>
      <ContactForm />
      <SearchBox />
      <ContactList contacts={initialContacts} />
    </>
  );
}

export default App;
