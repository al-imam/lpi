import { useState } from "react";
import classes from "./gallery.module.css";

function Gallery({ pictures }) {
  return (
    <div className="App">
      {pictures.map(({ url }) => (
        <Picture key={url + Math.random()} url={url} />
      ))}
    </div>
  );
}

export default Gallery;

function Picture({ url }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={isOpen ? classes.open : ""} onClick={() => setIsOpen(true)}>
      <img src={url} />
    </div>
  );
}
