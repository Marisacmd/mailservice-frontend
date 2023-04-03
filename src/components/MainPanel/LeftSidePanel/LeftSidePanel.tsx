import { AxiosResponse } from "axios";
import { observer } from "mobx-react";
import { useEffect } from "react";
import { apiCall } from "../../../helpers/apiCall";
import directoryStore from "../../../store/directoryStore";
import mailsStore from "../../../store/mailsStore";
import AddNewDirectory from "./AddNewDirectory/AddNewDirectory";
import DirectoriesList from "./DirectoriesList/DirectoriesList";
import styles from "./styles.module.scss";

const LeftSidePanel = () => {
  const getDirectories = () => {
    const executionCallback = () => {
      mailsStore.setTriggerUpdateMails(false);
    };

    const responseCallback = (response: AxiosResponse) => {
      directoryStore.updateDirectoriesList(response.data);
    };

    apiCall(
      "get",
      "getdirectorieslist",
      { id: directoryStore.selectedDirectoryId },
      responseCallback,
      executionCallback
    );
  };

  useEffect(() => {
    getDirectories();
  }, []);

  return (
    <div className={styles.leftSidePanel}>
      <DirectoriesList />
      <AddNewDirectory reloadCategories={getDirectories} />
    </div>
  );
};

export default observer(LeftSidePanel);
