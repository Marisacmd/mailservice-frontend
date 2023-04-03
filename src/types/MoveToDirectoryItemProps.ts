import { MouseEventHandler } from "react";

export default interface MoveToDirectoryItem {
  name: string;
  selectOnClick: MouseEventHandler<HTMLDivElement>;
}
