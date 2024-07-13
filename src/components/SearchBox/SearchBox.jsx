import css from "./SearchBox.module.css";

function SearchBox() {
  return (
    <div className={css.wrap}>
      <label className={css.label}>
        <span>Find contats by name</span>
        <input className={css.input} type="text" name="name" />
      </label>
    </div>
  );
}

export default SearchBox;
