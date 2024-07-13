import css from "./ContactForm.module.css";

function ContactForm() {
  return (
    <form className={css.form}>
      <label className={css.label}>
        <span>Name</span>
        <input className={css.input} type="text" name="name" />
      </label>
      <label className={css.label}>
        <span>Number</span>
        <input className={css.input} type="text" name="number" />
      </label>
      <button className={css.btn} type="submit">
        Add contact
      </button>
    </form>
  );
}

export default ContactForm;
