import styles from "./basicCard.module.css";
import { clsx } from "clsx";

type BasicCardProps = {
  children: React.ReactNode;
  className?: string;
};

export const BasicCard: React.FC<BasicCardProps> = (props) => {
  return <div className={clsx(styles.basicCard, props.className)}>{props.children}</div>;
};
