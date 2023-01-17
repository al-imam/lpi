import DH from "../DH/DH";
import classes from "./tp.module.css";
import Teacher from "../Teacher/Teacher";
import Location from "../Location/Location";

function TP({ description, name }) {
  return (
    <>
      <Location current="departments" subRoute="computer" />
      <div className={classes.section}>
        <div className={classes.container}>
          <div className={classes.heading}>
            <DH description={description} name={name} />
            <div className={classes.group}>
              <Teacher />
              <Teacher />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TP;
