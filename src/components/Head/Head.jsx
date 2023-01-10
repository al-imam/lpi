import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import { useCallback, useState } from "react";
import useOutsideClick from "./useOutSideClick";

function Head() {
  const [open, setOpen] = useState(false);

  const onClick = useCallback(() => {
    if (open) {
      setOpen(false);
    }
    console.log("im called");
  }, []);

  const ref = useOutsideClick(onClick);

  return (
    <div ref={ref}>
      <Header setOpen={setOpen} open={open} />
      <Navbar open={open} />
    </div>
  );
}

export default Head;
