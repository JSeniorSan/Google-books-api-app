import styles from "./Loading.module.scss";
import { ImSpinner9 } from "react-icons/im";
function Loading() {
  return (
    <div className={styles.loading}>
      <ImSpinner9 />
    </div>
  );
}

export default Loading;
