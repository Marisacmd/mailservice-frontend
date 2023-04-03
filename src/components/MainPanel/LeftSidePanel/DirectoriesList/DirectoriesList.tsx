import Directory from "../Directory/Directory";
import { mainDirectoriesLeftPanel } from "../../../../config/constants";
import { ShortDirectoryType } from "../../../../types/common";
import styles from "./styles.module.scss";

const DirectoriesList = () => {
  return (
    <div className={styles.directoriesList}>
      {mainDirectoriesLeftPanel.map((item: ShortDirectoryType, index) => (
        <Directory
          item={item}
          index={index}
          onDeleteCategory={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
      ))}
    </div>
  );
};

export default DirectoriesList;
