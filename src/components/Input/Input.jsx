function Input({ type = "text", placeholder, setValue, value }) {
  return (
    <input
      value={value}
      onChange={(evt) => setValue(evt.target.value)}
      className={classes.inputs + " " + classes.text}
      type={type}
      placeholder={placeholder}
      autoComplete="off"
      required
    />
  );
}

export default Input;

function PasswordInput({ placeholder, setValue, value }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={classes.group}>
      <input
        className={classes.inputs + " " + classes.password}
        value={value}
        onChange={(evt) => setValue(evt.currentTarget.value)}
        type={open ? "text" : "password"}
        placeholder={placeholder}
        autoComplete="off"
        required
      />
      <button
        className={classes.seen}
        type="button"
        onClick={() => setOpen((p) => !p)}
      >
        <img className={classes.eye} alt="Eye" />
      </button>
    </div>
  );
}
