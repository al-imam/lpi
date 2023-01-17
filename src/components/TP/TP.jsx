import DH from "../DH/DH";
import classes from "./tp.module.css";
import Teacher from "../Teacher/Teacher";

function TP() {
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <DH
          description={`Lakshmipur polytechnic institute was established in 2006. This institute conducts 4 years Diploma in Engineering course under bangladesh Technical education board. In addition to technical education every technology has a non-technical education department for teaching compulsory subjects such as Bangla, English, Mathematics, Physics, Chemistry, Social Science etc to the students. students are taught in two shifts morning and afternoon.`}
          name="computer technology"
        />
        <Teacher />
      </div>
    </div>
  );
}

export default TP;
