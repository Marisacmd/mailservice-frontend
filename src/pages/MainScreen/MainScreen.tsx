import MainPanel from "../../components/MainPanel/MainPanel";
import UpperPanel from "../../components/UpperPanel/UpperPanel";
import styles from "./styles.module.scss";

const MainScreen = () => {
  return (
    <div className={styles.mainScreen}>
      <UpperPanel />
      <MainPanel />
    </div>
  );
};

export default MainScreen;
