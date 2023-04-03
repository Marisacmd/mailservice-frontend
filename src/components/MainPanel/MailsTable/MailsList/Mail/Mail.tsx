import { observer } from "mobx-react";
import Author from "./Author/Author";
import Select from "./Select/Select";
import Title from "./Title/Title";
import Date from "./Date/Date";
import mailsStore from "../../../../../store/mailsStore";
import MailProps from "../../../../../types/MailProps";
import styles from "./styles.module.scss";

const Mail = (props: MailProps) => {
  const { author, title, createdat, text } = props.item;

  const changeMailsReadingMode = () => {
    mailsStore.setShowedMail(props.item.id);
  };

  return (
    <div
      className={`${styles.mail} ${
        mailsStore.selectedMails.includes(props.item.id)
          ? styles.selected
          : null
      }`}
      onClick={changeMailsReadingMode}
    >
      <Select
        id={props.item.id}
        isSelected={mailsStore.selectedMails.includes(props.item.id)}
      />
      <Author author={author} />
      <Title title={title} text={text} />
      <Date date={createdat} />
    </div>
  );
};

export default observer(Mail);
