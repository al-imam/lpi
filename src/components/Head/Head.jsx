import Navbar from "./Navbar/Navbar";
import Header from "./Header/Header";
import { useState } from "react";

function Head() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Header setOpen={setOpen} open={open} />
      <Navbar open={open} />
    </>
  );
}

export default Head;
