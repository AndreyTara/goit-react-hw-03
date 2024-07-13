import css from "./Contact.module.css";
import { FaPhoneAlt, FaUser } from "react-icons/fa";

function Contact({ data }) {
  return (
    <div className={css.wrap}>
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
      <button className={css.btn} type="button">
        Delete
      </button>
    </div>
  );
}

export default Contact;
