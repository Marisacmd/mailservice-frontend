import { observer } from "mobx-react";
import mailsStore from "../../../store/mailsStore";
import { MailType } from "../../../types/common";
import GeneralDirectories from "./GeneralDirectories/GeneralDirectories";
import MailReader from "./MailReader/MailReader";
import MailsList from "./MailsList/MailsList";
import MailsOperations from "./MailsOperations/MailsOperations";
import styles from "./styles.module.scss";

const MailsTable = () => {
  return (
    <div className={styles.mailsTable}>
      {!mailsStore.showedMail ? (
        <div>
          <MailsOperations />
          <GeneralDirectories />
          <MailsList />
        </div>
      ) : (
        <MailReader
          item={
            mailsStore.mails.filter(
              (item: MailType) => item.id === mailsStore.showedMail
            )[0]
          }
        />
      )}
    </div>
  );
};

export default observer(MailsTable);
