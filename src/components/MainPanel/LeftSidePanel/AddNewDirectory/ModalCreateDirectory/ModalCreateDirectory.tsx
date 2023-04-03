import { ChangeEvent, useEffect, useState } from "react";
import CloseButton from "../../../../../assets/CloseButton.png";
import { apiCall } from "../../../../../helpers/apiCall";
import ModalCreateDirectoryProps from "../../../../../types/ModalCreateDirectory";
import styles from "./styles.module.scss";

const ModalCreateDirectory = (props: ModalCreateDirectoryProps) => {
  const [show, setShow] = useState<boolean>(false);
  const [categoryName, setCategoryName] = useState<string>("");

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

  const saveNewCategory = () => {
    const executionCallback = () => {
      closeModal();
      props.onSaveCategory();
    };

    apiCall(
      "post",
      "createcustomdirectory",
      { directoryname: categoryName },
      executionCallback
    );
  };

  const changeCategoryName = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setCategoryName(value);
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
            <div className={styles.headerText}>Создать категорию</div>
          </div>
          <input
            className={styles.nameInput}
            onChange={changeCategoryName}
          ></input>
          <button className={styles.saveButton} onClick={saveNewCategory}>
            Сохранить
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalCreateDirectory;
