import { useEffect, useState } from "react";
import { observer } from "mobx-react";
import { reaction } from "mobx";
import Directory from "../Directory/Directory";
import ModalEditDirectory from "./ModalEditDirectory/ModalEditDirectory";
import ModalCreateDirectory from "./ModalCreateDirectory/ModalCreateDirectory";
import directoryStore from "../../../../store/directoryStore";
import mailsStore from "../../../../store/mailsStore";
import CreateDirectoryLogo from "../../../../assets/CreateDirectoryLogo.png";
import MoreLogo from "../../../../assets/MoreLogo.png";
import AddNewDirectoryProps from "../../../../types/AddNewDirectoryProps";
import styles from "./styles.module.scss";
import {
  FullDirectoryType,
  ShortDirectoryType,
} from "../../../../types/common";

const AddNewDirectory = (props: AddNewDirectoryProps) => {
  const [isShowAddDirectory, toggleIsShowAddDirectory] = useState(false);
  const [isNewCategoryCreated, toggleIsNewCategoryCreated] = useState(false);

  const [isCategoryEdited, toggleIsCategoryEdited] = useState(false);

  const changeIsShowAddDirectory = () => {
    directoryStore.changeSelectedDirectoryId(null);
    toggleIsShowAddDirectory(!isShowAddDirectory);
  };

  const showModalCreateNewCategory = () => {
    toggleIsNewCategoryCreated(true);
  };

  const onSetShowChangeCreatedModal = () => {
    toggleIsNewCategoryCreated(false);
  };

  const onSetShowChangeEditedModal = () => {
    toggleIsCategoryEdited(false);
    directoryStore.clearUpdateHoveredCategoryLeft();
  };

  useEffect(() => {
    return reaction(
      () => directoryStore.hoveredCategoryLeft,
      (hoveredCategoryLeft) => {
        if (hoveredCategoryLeft) {
          toggleIsCategoryEdited(true);
        }
      }
    );
  }, []);

  const onSaveCategory = () => {
    props.reloadCategories();
    directoryStore.updateEditedCategoryName("");
  };

  const onDeleteCategory = () => {
    directoryStore.changeSelectedDirectoryId(null);
    props.reloadCategories();
    mailsStore.setTriggerUpdateMails(true);
  };

  return (
    <div className={styles.addNewDirectory}>
      <div className={styles.moreButton} onClick={changeIsShowAddDirectory}>
        <img src={MoreLogo} className={styles.moreLogo} alt="MoreLogo" />
        Еще
      </div>
      {isShowAddDirectory ? (
        <div>
          <div
            className={styles.createButton}
            onClick={showModalCreateNewCategory}
          >
            <img
              src={CreateDirectoryLogo}
              className={styles.createDirectoryLogo}
              alt="CreateDirectoryLogo"
            />
            Создать
          </div>
          {directoryStore.directoriesList.map(
            (item: FullDirectoryType, index) =>
              item.iscustom ? (
                <Directory
                  item={item}
                  onDeleteCategory={onDeleteCategory}
                  index={index}
                />
              ) : null
          )}
        </div>
      ) : null}
      {isNewCategoryCreated ? (
        <ModalCreateDirectory
          show={isNewCategoryCreated}
          onSetShowChange={onSetShowChangeCreatedModal}
          onSaveCategory={props.reloadCategories}
        />
      ) : null}
      {isCategoryEdited ? (
        <ModalEditDirectory
          show={isCategoryEdited}
          onSetShowChange={onSetShowChangeEditedModal}
          onSaveCategory={onSaveCategory}
        />
      ) : null}
    </div>
  );
};

export default observer(AddNewDirectory);
