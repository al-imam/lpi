import classes from "./picture.module.css";
import { useState } from "react";
import { Fullscreen } from "@svg";

function Picture({ url, imageStyle = {}, containerStyle = {} }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`${classes.imgContainer} ${isOpen ? classes.open : ""}`}
      onClick={() => setIsOpen(false)}
      style={containerStyle}
    >
      <img
        onClick={(evt) => {
          evt.stopPropagation();
          setIsOpen(true);
        }}
        className={classes.img}
        src={url}
        style={imageStyle}
      />
      <div className={classes.svg}>
        <Fullscreen />
      </div>
    </div>
  );
}

export default Picture;
