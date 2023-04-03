import Directory from "./Directory/Directory";
import { mainDirectoriesMiddlePanel } from "../../../../config/constants";
import styles from "./styles.module.scss";

const GeneralDirectories = () => {
  return (
    <div className={styles.generalDirectories}>
      {mainDirectoriesMiddlePanel.map((option) => (
        <Directory item={option} />
      ))}
    </div>
  );
};

export default GeneralDirectories;
