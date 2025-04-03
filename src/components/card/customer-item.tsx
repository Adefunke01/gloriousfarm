import styles from "./customer-item.module.css";

export type CustomerItemProps = {
  name: string;
  image: string;
  location: string
};

export const CustomerItem: React.FunctionComponent<CustomerItemProps> = (
  props
) => {
  return (
      <div className={styles.customerItem}>
        <img className={styles.image} src={props.image} />
        <div className={styles.customerDetails}>
        <p className={styles.name}>{props.name}</p>
        <p className={styles.location}>{props.location}</p>
        </div>
      </div>
  );
};
