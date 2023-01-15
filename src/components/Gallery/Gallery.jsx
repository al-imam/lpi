import { useState, useCallback } from "react";
import classes from "./gallery.module.css";
import useOutsideClick from "../../hooks/useOutSideClick";

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

  const onClick = useCallback(() => {
    if (open) {
      setIsOpen(false);
    }
    console.log("im called", open);
  }, [open]);

  const ref = useOutsideClick(onClick);

  return (
    <div
      ref={ref}
      className={isOpen ? classes.open : ""}
      onClick={() => setIsOpen(true)}
    >
      <img src={url} />
    </div>
  );
}
