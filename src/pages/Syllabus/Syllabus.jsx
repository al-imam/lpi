import { useState } from "react";
import classes from "./syllabus.module.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Syllabus({ department }) {
  const [selected, setSelected] = useState("1");

  const handleChange = (evt) => {
    setSelected(evt.target.value);
  };

  return (
    <main className={classes.main}>
      <p className={classes.p}>
        <strong>Note!</strong>
        if your browser don't support pdf rendering or you don't have pdf reader
        then you need to download the file!
      </p>
      <section className={classes.wrapper}>
        <div className={classes.selectContainer}>
          <p>Select Semester</p>
          <ArrowForwardIosIcon className={classes["arrow"]} />
          <select value={selected} onChange={handleChange}>
            <option value="1">First</option>
            <option value="2">Second</option>
            <option value="3">Third</option>
            <option value="4">Fourth</option>
            <option value="5">Fifth</option>
            <option value="6">Sixth</option>
            <option value="7">Seventh</option>
          </select>
        </div>
        <iframe
          src={`/PDFS/${department}/${department}-${selected}.pdf#toolbar=0`}
          className={classes.iframe}
        ></iframe>
      </section>
    </main>
  );
}

export default Syllabus;
