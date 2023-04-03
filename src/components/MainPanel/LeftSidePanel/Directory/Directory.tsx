import { observer } from "mobx-react";
import directoryStore from "../../../../store/directoryStore";
import mailsStore from "../../../../store/mailsStore";
import CustomCategory from "../../../../assets/CustomCategory.png";
import EditCategoryLogo from "../../../../assets/EditCategoryLogo.png";
import DeleteCategoryButtonLogo from "../../../../assets/DeleteCategoryButtonLogo.png";
import { LeftDirectoryProps } from "../../../../types/LeftDirectoryProps";
import { apiCall } from "../../../../helpers/apiCall";
import styles from "./styles.module.scss";

const Directory = (props: LeftDirectoryProps) => {
  const { name, id, logo, iscustom } = props.item;
  const { index } = props;

  const changeDirectory = () => {
    mailsStore.setShowedMail(null);
    directoryStore.changeSelectedDirectoryId(id);
    directoryStore.setDirectoryClicked();
  };

  const deleteCategory = () => {
    const executionCallback = () => {
      props.onDeleteCategory();
    };
    apiCall(
      "post",
      "deletecustomdirectory",
      { id: id },
      null,
      executionCallback
    );
  };

  const editCategory = () => {
    directoryStore.updateHoveredCategoryLeft(index);
  };

  return (
    <div
      className={`${styles.directory} ${
        directoryStore.selectedDirectoryId === id ? styles.chosen : null
      }`}
      onClick={changeDirectory}
    >
      <img
        src={!iscustom ? logo : CustomCategory}
        className={styles.directoryLogo}
      />
      <div className={styles.directoryName}>{name} </div>
      {iscustom ? (
        <div className={styles.rightSideLogoBlock}>
          <img
            src={EditCategoryLogo}
            className={styles.rightSideLogo}
            onClick={editCategory}
          />
          <img
            src={DeleteCategoryButtonLogo}
            className={styles.rightSideLogo}
            onClick={deleteCategory}
          />
        </div>
      ) : null}
    </div>
  );
};

export default observer(Directory);
