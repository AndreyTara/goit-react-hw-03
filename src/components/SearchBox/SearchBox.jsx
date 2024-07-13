import css from "./SearchBox.module.css";

function SearchBox({ value, onFilter }) {
  return (
    <div className={css.wrap}>
      <label className={css.label}>
        <span>Find contats by name</span>
        <input
          className={css.input}
          type="text"
          name="name"
          value={value}
          onChange={(e) => onFilter(e.target.value)}
        />
      </label>
    </div>
  );
}

export default SearchBox;
