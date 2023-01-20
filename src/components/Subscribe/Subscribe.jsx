import { useState } from "react";

function Subscribe() {
  const [value, setValue] = useState("");
  return (
    <section style={{ paddingInline: "var(--gap-inline)" }}>
      <div>
        <p>Subscribe for future Notice's and updates</p>
        <form>
          <input
            type="email"
            name="subscribe"
            value={value}
            onChange={(evt) => setValue(evt.target.value)}
          />
          <button>Subscribe</button>
        </form>
      </div>
    </section>
  );
}

export default Subscribe;
