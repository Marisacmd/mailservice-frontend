export type ShortDirectoryType = {
  name: string;
  id: number;
};

export type LongDirectoryType = {
  name: string;
  id: number;
  logo: HTMLImageElement;
  iscustom: boolean;
};

export type DirectoriesList = LongDirectoryType[];

export type MailType = {
  author: string;
  title: string;
  createdat: string;
  id: number;
  text: string;
};

export type FullDirectoryType = {
  id: number;
  name: string;
  iscustom: boolean;
};
