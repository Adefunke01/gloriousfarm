import styles from "./chatCard.module.css";
import { BasicCard } from "./basicCard";
import { clsx } from "clsx";

type user = {
  imageUrl: string;
  isOnline: boolean;
};

type ChatCardProps = {
  classname?: string;
  title: string;
  description: string;
  userList: user[];
};

export const ChatCard: React.FunctionComponent<ChatCardProps> = (props) => {
  return (
    <BasicCard>
      <div>
        <p className={styles.title}>{props.title}</p>
        <p className={styles.description}>{props.description}</p>
        <div className={styles.userListContainer}>
          {props.userList.map((user, index) => (
            <div
              className={clsx(
                styles.user,
                user.isOnline ? styles.yellow : styles.user
              )}
              key={index}
            >
              {user.isOnline && <div className={styles.online}></div>}
              <img className={styles.image} src={user.imageUrl} alt="" />
            </div>
          ))}
        </div>
      </div>
    </BasicCard>
  );
};
