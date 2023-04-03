import { observer } from "mobx-react";
import SelectCheckboxActive from "../../../../../../assets/SelectCheckboxActive.png";
import SelectCheckbox from "../../../../../../assets/SelectCheckbox.png";
import mailsStore from "../../../../../../store/mailsStore";
import styles from "./styles.module.scss";
import SelectProps from "../../../../../../types/SelectProps";
import { MouseEventHandler } from "react";

const Select = (props: SelectProps) => {
  const toggleCheckbox = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    mailsStore.updateSelectedMails(props.id);
  };

  return (
    <div className={styles.select}>
      <img
        src={props.isSelected ? SelectCheckboxActive : SelectCheckbox}
        className={styles.seletLogo}
        onClick={(e) => toggleCheckbox(e)}
      />
    </div>
  );
};

export default observer(Select);
