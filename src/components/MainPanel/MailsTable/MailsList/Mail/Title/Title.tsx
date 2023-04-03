import TitleProps from "../../../../../../types/TitleProps";
import styles from "./styles.module.scss";

const Title = (props: TitleProps) => {
  const { title, text } = props;
  return <text className={styles.title}>{title}</text>;
};

export default Title;
