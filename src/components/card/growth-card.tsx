import { BasicCard } from "./basicCard";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import maggie from "../../assets/images/customer/maggie.png";
import styles from "./growth-card.module.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const GrowthCard: React.FC = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
    },
  };

  const labels = [
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
    "2021",
    "2022",
    "2023",
  ];
  const numbers = [0, 10, 20, 30, 40, 50, 100];
  const data = {
    labels,
    datasets: [
      {
        fill: true,
        // label: "Dataset 2",
        data:  numbers,//labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        tension: 0.5,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(37, 205, 37, 1)",
      },
    ],
  };

  const smallCardItems = [
    {
      title: "Top month",
      subtitle: "November",
      description: "2019",
    },
    {
      title: "Top year",
      subtitle: "2023",
      description: "96K sold so far",
    },
    {
      title: "Top day",
      subtitle: "Thursday",
      description: "190k sold so far",
    },
  ];

  return (
    <div>
    <BasicCard>
      <div className={styles.cardTitle}>
        <p>Growth</p>
        <p>Yearly</p>
      </div>
      <div>
        <Line id="chart" options={options} data={data} />
      </div>
      </BasicCard>
      <div className={styles.smallCardsContainer}>
        {smallCardItems.map((item, index) => (
          <BasicCard className={styles.smallCard} key={index}>
              <p className={styles.smallCardTitle}>{item.title}</p>
              <p className={styles.smallCardSubTitle}>{item.subtitle}</p>
              <p className={styles.description}>{item.description}</p>
          </BasicCard>
        ))}
      </div>
      </div>
  );
};
