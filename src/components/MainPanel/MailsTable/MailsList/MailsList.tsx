import { useEffect } from "react";
import { observer } from "mobx-react";
import { reaction } from "mobx";
import Mail from "./Mail/Mail";
import { apiCall } from "../../../../helpers/apiCall";
import directoryStore from "../../../../store/directoryStore";
import mailsStore from "../../../../store/mailsStore";
import { MailType } from "../../../../types/common";
import styles from "./styles.module.scss";
import { AxiosResponse } from "axios";

const MailsList = () => {
  useEffect(() => {
    reaction(
      () => directoryStore.directoryClicked,
      (isClicked) => {
        if (isClicked) {
          getMails();
          directoryStore.setDirectoryClicked();
        }
      }
    );
  }, []);

  useEffect(() => {
    reaction(
      () => mailsStore.triggerUpdateMails,
      (shouldUpdate) => {
        if (shouldUpdate) {
          getMails();
          mailsStore.setTriggerUpdateMails(false);
        }
      }
    );
  }, []);

  useEffect(() => {
    getMails();
  }, []);

  const getMails = () => {
    const executionCallback = () => {
      mailsStore.setTriggerUpdateMails(false);
    };

    const responseCallback = (response: AxiosResponse) => {
      mailsStore.updateMailsArray(response.data);
    };

    apiCall(
      "post",
      "getmailsbydirectory",
      { id: directoryStore.selectedDirectoryId },
      responseCallback,
      executionCallback
    );
  };

  return (
    <div className={styles.mailsList}>
      {mailsStore.mails.map((item: MailType) => (
        <Mail item={item} />
      ))}
    </div>
  );
};

export default observer(MailsList);
