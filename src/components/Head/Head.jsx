import Navbar from "@components/Navbar/Navbar";
import Header from "@components/Header/Header";
import { useCallback, useState } from "react";
import useOutsideClick from "@hooks/useOutSideClick";

function Head() {
  const [open, setOpen] = useState(false);

  const onClick = useCallback(() => {
    if (open) {
      setOpen(false);
    }
  }, [open]);

  const ref = useOutsideClick(onClick);

  return (
    <div
      ref={ref}
      style={{
        position: "sticky",
        zIndex: 200,
        top: 0,
        boxShadow: "0 0 0.25rem rgb(22 15 25 / 0.5)",
      }}
    >
      <Header setOpen={setOpen} open={open} />
      <Navbar open={open} setOpen={setOpen} />
    </div>
  );
}

export default Head;
