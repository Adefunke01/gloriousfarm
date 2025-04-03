import styles from "./sidebaritem.module.css";
import { Link } from "react-router-dom";

type SidebarItemProps = {
  title: string;
  iconLink: string;
  url: string
  active: boolean;
};

export const SidebarItem: React.FunctionComponent<SidebarItemProps> = (
  props
) => {
  return (
    <Link className={styles.link} to={props.url}>
      <div className={styles.sidebarItem}>
        <img className={styles.icon} src={props.iconLink} />
        <div className={props.active ? styles.active : ""}>{props.title}</div>
      </div>
    </Link>
  );
};
