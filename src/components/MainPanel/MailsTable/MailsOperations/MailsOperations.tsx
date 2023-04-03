import { useEffect, useState } from "react";
import { observer } from "mobx-react";
import MoveToDirectoryItem from "./Directory/MoveToDirectoryItem";
import SelectCheckbox from "../../../../assets/SelectCheckbox.png";
import MoveToSpam from "../../../../assets/MoveToSpam.png";
import DeleteMail from "../../../../assets/DeleteMail.png";
import MoveToDirectory from "../../../../assets/MoveToDirectory.png";
import SelectCheckboxActive from "../../../../assets/SelectCheckboxActive.png";
import mailsStore from "../../../../store/mailsStore";
import directoryStore from "../../../../store/directoryStore";
import { apiCall } from "../../../../helpers/apiCall";
import styles from "./styles.module.scss";

const MailsOperations = () => {
  const [isAllMailsSelected, setIsAllMailsSelected] = useState<boolean>(false);
  const [showDirectoriesList, setShowDirectoriesList] =
    useState<boolean>(false);
  const [directoryToMove, setDirectoryToMove] = useState<number | null>(null);

  useEffect(() => {
    if (isAllMailsSelected) {
      mailsStore.selectAllMails();
    } else {
      mailsStore.clearSelectAllMails();
    }
  }, [isAllMailsSelected]);

  useEffect(() => {
    if (showDirectoriesList) {
      const handleClick = () => {
        setShowDirectoriesList(false);
        window.removeEventListener("click", handleClick);
      };
      window.addEventListener("click", handleClick);
    }
  }, [showDirectoriesList]);

  useEffect(() => {
    if (directoryToMove) {
      changeMailDirectory();
    }
  }, [directoryToMove]);

  const toggleCheckbox = () => {
    setIsAllMailsSelected(!isAllMailsSelected);
  };

  const toggleDirectoriesList = () => {
    setShowDirectoriesList(!showDirectoriesList);
  };

  const deleteMessage = () => {
    setDirectoryToMove(4);
  };

  const selectNewDirectory = (id: number) => {
    setDirectoryToMove(id);
  };

  const moveToSpam = () => {
    setDirectoryToMove(5);
  };

  const changeMailDirectory = () => {
    const responseCallback = () => {
      mailsStore.clearSelectAllMails();
      mailsStore.setTriggerUpdateMails(true);
    };

    if (mailsStore.selectedMails.length > 0) {
      apiCall(
        "post",
        "changemailsdirectory",
        {
          mailIdArray: mailsStore.selectedMails,
          directoryId: directoryToMove,
        },
        responseCallback
      );
    }
  };

  return (
    <div className={styles.mailsOperations}>
      <img
        src={
          mailsStore.mails.length === mailsStore.selectedMails.length &&
          mailsStore.selectedMails.length > 0
            ? SelectCheckboxActive
            : SelectCheckbox
        }
        className={styles.selectAllLogo}
        alt=""
        onClick={toggleCheckbox}
        title="Выбрать все"
      />
      <img
        src={MoveToSpam}
        className={styles.mailsOperationsLogo}
        onClick={moveToSpam}
        alt=""
        title="В спам"
      />
      <img
        src={DeleteMail}
        className={styles.mailsOperationsLogo}
        onClick={deleteMessage}
        alt=""
        title="Удалить"
      />
      <div className={styles.changeDirectoryBlock}>
        {" "}
        <img
          src={MoveToDirectory}
          className={styles.mailsOperationsLogo}
          onClick={toggleDirectoriesList}
          alt=""
          title="Переместить"
        />
        {showDirectoriesList ? (
          <div className={styles.directoriiesList}>
            {directoryStore.directoriesList.map((item) => (
              <MoveToDirectoryItem
                selectOnClick={() => selectNewDirectory(item.id)}
                name={item.name}
              />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default observer(MailsOperations);
