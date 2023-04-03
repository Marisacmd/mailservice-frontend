import { observer } from "mobx-react";
import MoveToDirectoryItemProps from "../../../../../types/MoveToDirectoryItemProps";
import styles from "./styles.module.scss";

const MoveToDirectoryItem = (props: MoveToDirectoryItemProps) => {
  const { name, selectOnClick } = props;

  return (
    <div className={styles.directoryItem} onClick={selectOnClick}>
      {name}
    </div>
  );
};

export default observer(MoveToDirectoryItem);
