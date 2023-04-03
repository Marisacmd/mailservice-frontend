import { ChangeEvent, useEffect, useState } from "react";
import { observer } from "mobx-react";
import CloseButton from "../../../../../assets/CloseButton.png";
import directoryStore from "../../../../../store/directoryStore";
import { apiCall } from "../../../../../helpers/apiCall";
import ModalEditDirectoryProps from "../../../../../types/ModalEditDirectory";
import styles from "./styles.module.scss";

const ModalEditDirectory = (props: ModalEditDirectoryProps) => {
  const [show, setShow] = useState(false);
  const [categoryName, setCategoryName] = useState("");

  useEffect(() => {
    setShow(props.show);
  }, []);

  useEffect(() => {
    setShow(props.show);
  }, [props.show]);

  useEffect(() => {
    if (!show) {
      setCategoryName("");
    }
  }, [show]);

  const saveEditedCategory = () => {
    if (directoryStore.hoveredCategoryLeft) {
      const executionCallback = () => {
        closeModal();
        props.onSaveCategory();
      };
      apiCall(
        "post",
        "changecustomdirectory",
        {
          directoryname: directoryStore.newDirectoryName,
          id: directoryStore.directoriesList[directoryStore.hoveredCategoryLeft]
            .id,
        },
        executionCallback
      );
    }
  };

  const changeCategoryName = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    directoryStore.updateEditedCategoryName(value);
  };

  const closeModal = () => {
    setShow(false);
    props.onSetShowChange();
  };

  return (
    <div className={show ? styles["modalActive"] : styles["modalHidden"]}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalBody}>
          <img
            src={CloseButton}
            className={styles.closeButton}
            onClick={closeModal}
          />
          <div className={styles.modalHeader}>
            <div className={styles.headerText}>Редактировать категорию</div>
          </div>
          <input
            className={styles.nameInput}
            value={directoryStore.newDirectoryName}
            onChange={changeCategoryName}
          ></input>
          <button className={styles.saveButton} onClick={saveEditedCategory}>
            Сохранить
          </button>
        </div>
      </div>
    </div>
  );
};

export default observer(ModalEditDirectory);
