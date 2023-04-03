import { observable, action, makeObservable } from "mobx";
import { FullDirectoryType } from "../types/common";
import mailsStore from "./mailsStore";

class DirectoryStore {
  public selectedDirectoryId: number | null = 1;
  public directoryClicked: boolean = false;
  public directoriesList: FullDirectoryType[] = [];
  public hoveredCategoryLeft: number | null = null;
  public newDirectoryName: string = "";

  constructor() {
    makeObservable(this, {
      selectedDirectoryId: observable,
      directoryClicked: observable,
      directoriesList: observable,
      hoveredCategoryLeft: observable,
      newDirectoryName: observable,

      changeSelectedDirectoryId: action.bound,
      updateDirectoriesList: action.bound,
      updateHoveredCategoryLeft: action.bound,
      updateEditedCategoryName: action.bound,
      clearUpdateHoveredCategoryLeft: action.bound,
    });
  }

  changeSelectedDirectoryId(value: number | null) {
    mailsStore.clearSelectAllMails();
    this.selectedDirectoryId = value;
  }
  setDirectoryClicked() {
    this.directoryClicked = !this.directoryClicked;
  }
  updateDirectoriesList(list: FullDirectoryType[]) {
    this.directoriesList = list;
  }

  updateHoveredCategoryLeft(value: number) {
    if (this.directoriesList) {
      this.newDirectoryName = this.directoriesList[value].name;
    }
    this.hoveredCategoryLeft = value;
  }

  clearUpdateHoveredCategoryLeft() {
    this.hoveredCategoryLeft = null;
  }

  updateEditedCategoryName(value: string) {
    this.newDirectoryName = value;
  }
}

const directoryStore = new DirectoryStore();
export default directoryStore;
