import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
// import { nanoid } from "nanoid";

function ContactList({ contacts, onDel }) {
  return (
    <div className={css.wrap}>
      <ul className={css.ul}>
        {contacts.map((contact) => {
          return (
            <>
              <Contact data={contact} onDel={onDel} />
            </>
          );
        })}
      </ul>
    </div>
  );
}

export default ContactList;
