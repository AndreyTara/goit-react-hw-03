import css from "./Contact.module.css";
import { FaPhoneAlt, FaUser } from "react-icons/fa";

function Contact({ data, onDel }) {
  return (
    <li className={css.wrap} key={data.id}>
      <div className={css.box}>
        <div className={css.item}>
          <FaUser className={css.person} />
          <p>{data.name}</p>
        </div>
        <div className={css.item}>
          <FaPhoneAlt className={css.person} />
          <p>{data.number}</p>
        </div>
      </div>
      <button
        id={data.id}
        className={css.btn}
        type="button"
        onClick={(e) => onDel(e.target.id)}
      >
        Delete
      </button>
    </li>
  );
}

export default Contact;
