import { observable, action, makeObservable } from "mobx";
import { MailType } from "../types/common";

class MailsStore {
  public mails: MailType[] = [];
  public selectedMails: number[] = [];
  public triggerUpdateMails: boolean = false;
  public showedMail: number | null = null;

  constructor() {
    makeObservable(this, {
      mails: observable,
      selectedMails: observable,
      triggerUpdateMails: observable,
      showedMail: observable,

      selectAllMails: action.bound,
      updateMailsArray: action.bound,
      clearSelectAllMails: action.bound,
      updateSelectedMails: action.bound,
      setTriggerUpdateMails: action.bound,
      setShowedMail: action.bound,
    });
  }

  updateMailsArray(value: MailType[]) {
    this.mails = value;
  }

  selectAllMails() {
    for (let index = 0; index < this.mails.length; index++) {
      this.selectedMails.push(this.mails[index].id);
    }
  }

  clearSelectAllMails() {
    this.selectedMails = [];
  }

  updateSelectedMails(id: number) {
    if (!this.selectedMails.includes(id)) {
      this.selectedMails.push(id);
    } else {
      this.selectedMails = this.selectedMails.filter(
        (item: number) => item !== id
      );
    }
  }

  setTriggerUpdateMails(value: boolean) {
    this.triggerUpdateMails = value;
  }

  setShowedMail(value: number | null) {
    this.showedMail = value;
  }
}

const mailsStore = new MailsStore();
export default mailsStore;
