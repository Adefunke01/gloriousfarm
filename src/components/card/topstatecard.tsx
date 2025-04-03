import styles from "./topstatecard.module.css";
import { BasicCard } from "./basicCard";

type state = {
  name: string;
  population: string;
  percentage: number;
};

type TopStateCardProps = {
  classname?: string;
  title: string;
  stateList: state[];
};

export const TopStateCard: React.FunctionComponent<TopStateCardProps> = (
  props
) => {
  const length = 272;
//   const totalPopulation= 320
  return (
    <BasicCard>
      <div className={styles.stateContainer}>
        <p className={styles.title}>{props.title}</p>
        {props.stateList.map((state, index) => (
          <div
            style={{
              width: `${(state.percentage) * length}px`,
              height: "29",
              display: "flex",
              justifyContent: "space-between",
              alignItems:"center",
              borderRadius:"4px",
              background:
                "linear-gradient(90deg, #FFCD71 -2.57%, rgba(255, 205, 113, 0) 112.5%)",
                margin:"10px",
                padding: "6px 8px 6px 8px"
            }}
            key={index}
          >
            <p className={styles.name}>{state.name}</p>
            <p className={styles.population}>{state.population}</p>
          </div>
        ))}
      </div>
    </BasicCard>
  );
};
