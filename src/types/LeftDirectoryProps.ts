export interface LeftDirectoryProps {
  onDeleteCategory: () => void;
  item: {
    name: string;
    id: number;
    logo?: string | undefined;
    iscustom?: boolean;
  };
  index: number;
}
