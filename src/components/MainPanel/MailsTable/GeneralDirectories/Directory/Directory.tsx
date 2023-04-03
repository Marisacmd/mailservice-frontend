import { observer } from "mobx-react";
import directoryStore from "../../../../../store/directoryStore";
import mailsStore from "../../../../../store/mailsStore";
import GeneralDirectoryProps from "../../../../../types/GeneralDirectoryProps";
import styles from "./styles.module.scss";

const Directory = (props: GeneralDirectoryProps) => {
  const { name, id } = props.item;

  const changeDirectory = () => {
    directoryStore.changeSelectedDirectoryId(id);
    directoryStore.setDirectoryClicked();
  };

  return (
    <div
      className={`${styles.directory} ${
        directoryStore.selectedDirectoryId === id ? styles.chosen : null
      }`}
      onClick={changeDirectory}
    >
      {name}
    </div>
  );
};

export default observer(Directory);
