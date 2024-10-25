import StandardBtn from "../../common/standard-btn/StandardBtn";
import ActionBtn from "../../common/standard-btn/ActionBtn/ActionBtn"; // Falls benötigt
import styles from "./Content.module.css";

function Content({ children }) {
  return (
    <div className={styles.container}>
      <div className={styles.contentBox}>{children}</div>
      <div className={styles.buttons}>
        <StandardBtn>IT</StandardBtn>
        <StandardBtn>TESTT</StandardBtn>
        <StandardBtn>TEST!</StandardBtn>
        <ActionBtn>HALLLOOOO</ActionBtn>
      </div>
    </div>
  );
}

export default Content;
