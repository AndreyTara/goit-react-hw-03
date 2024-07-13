import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";

function ContactList({ contacts }) {
  console.log(contacts);
  return (
    <div className={css.wrap}>
      <ul className={css.ul}>
        {contacts.map((contact) => {
          return (
            <li className={css.li} key={contact.id}>
              <Contact data={contact} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ContactList;
