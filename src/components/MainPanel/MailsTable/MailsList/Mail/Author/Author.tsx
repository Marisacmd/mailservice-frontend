import { AuthorProps } from "../../../../../../types/AuthorProps";
import styles from "./styles.module.scss";

const Author = (props: AuthorProps) => {
  const { author } = props;

  return <div className={styles.author}>{author}</div>;
};

export default Author;
