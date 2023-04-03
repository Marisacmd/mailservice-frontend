import { DateProps } from "../../../../../../types/DateProps";
import styles from "./styles.module.scss";

const Date = (props: DateProps) => {
  const { date } = props;

  return <div className={styles.date}>{date}</div>;
};

export default Date;
