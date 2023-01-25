import classes from "./rl.module.css";

function RelatedLinks() {
  return (
    <section className={classes.section}>
      <h2 className={classes.heading}>Related Links</h2>
      <ul className={classes.items}>
        <li>
          <a target="_blank" rel="noopener" href="http://www.techedu.gov.bd">
            Directorate Of Technical Education
          </a>
        </li>
        <li>
          <a target="_blank" rel="noopener" href="http://www.bteb.gov.bd">
            Bangladesh Technical Education Board (BTEB)
          </a>
        </li>
        <li>
          <a target="_blank" rel="noopener" href="http://www.moedu.gov.bd">
            Ministry of Education
          </a>
        </li>
        <li>
          <a target="_blank" rel="noopener" href="http://www.step-dte.gov.bd/">
            Skills and Training Enhancement Project
          </a>
        </li>
        <li>
          <a target="_blank" rel="noopener" href="http://www.bpsc.gov.bd/">
            Bangladesh Public Service Commission
          </a>
        </li>
        <li>
          <a target="_blank" rel="noopener" href="http://www.bcc.gov.bd/">
            Bangladesh Computer Council
          </a>
        </li>
      </ul>
    </section>
  );
}

export default RelatedLinks;
