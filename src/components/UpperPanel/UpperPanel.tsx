import { AxiosResponse } from "axios";
import { ChangeEvent, useEffect, useState } from "react";
import { apiCall } from "../../helpers/apiCall";
import mailsStore from "../../store/mailsStore";
import styles from "./styles.module.scss";

const UpperPanel = () => {
  const [searchPhrase, setSearchPhrase] = useState<string>("");

  const changeSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchPhrase(value);
    if (value.length === 0) {
      clearQuerySearch();
    }
  };

  const clearQuerySearch = () => {
    setSearchPhrase("");
    mailsStore.setTriggerUpdateMails(true);
  };

  useEffect(() => {
    if (searchPhrase.length > 0) {
      searchMails();
    }
  }, [searchPhrase]);

  const searchMails = () => {
    const responseCallback = (response: AxiosResponse) => {
      mailsStore.updateMailsArray(response.data);
    };

    apiCall(
      "post",
      "searchmails",
      { searchQuery: searchPhrase },
      responseCallback
    );
  };

  return (
    <div className={styles.upperPanel}>
      <input
        className={styles.inputSearch}
        placeholder={"🔍 Поиск по почте"}
        value={searchPhrase}
        onChange={changeSearchInput}
      ></input>
      <div className={styles.clearQuerySearchButton} onClick={clearQuerySearch}>
        X
      </div>
      <div className={styles.logo}>✉️</div>
    </div>
  );
};

export default UpperPanel;
