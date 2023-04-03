import { observer } from "mobx-react";
import BackArrow from "../../../../assets/BackArrow.png";
import mailsStore from "../../../../store/mailsStore";
import MailReaderProps from "../../../../types/MailReader";
import styles from "./styles.module.scss";

const MailReader = (props: MailReaderProps) => {
  const { author, text } = props.item;

  const changeMode = () => {
    mailsStore.setShowedMail(null);
  };

  return (
    <div className={styles.mailReader}>
      <div className={styles.panel}>
        <img
          src={BackArrow}
          className={styles.backArrow}
          onClick={changeMode}
        />
        <div className={styles.letter}>
          <div className={styles.author}>👤{author}</div>
          <div className={styles.text}>{text}</div>
        </div>
      </div>
    </div>
  );
};

export default observer(MailReader);
