import dealIcon from "../../assets/images/Icon (from Tabler.io)-3.png";
import styles from "./dealbanner.module.css";

type DealBannerProps = {
  title: string;
};

export const DealBanner: React.FC<DealBannerProps> = (props) => {
  return (
    <div className={styles.dealBanner}>
      <img className={styles.dealImage} src={dealIcon} alt="" />
      <p>{props.title}</p>
    </div>
  );
};
