import { ChatCard } from "../../components/card/chatCard";
import { DashboardCard } from "../../components/card/dashboardCard";
import { Sidebar } from "../../components/sidebar/Sidebar";
import styles from "./customer.module.css";
import avatar from "../../assets/images/Avatar.png";
import avatar2 from "../../assets/images/Avatar-2.png";
import avatar3 from "../../assets/images/Avatar-3.png";
import avatar4 from "../../assets/images/Avatar-4.png";
import { TopStateCard } from "../../components/card/topstatecard";
import { BasicCard } from "../../components/card/basicCard";
import { DealBanner } from "../../components/card/dealbanner";

export const Customer: React.FC = () => {
  const userList = [
    { imageUrl: avatar, isOnline: true },
    { imageUrl: avatar2, isOnline: true },
    { imageUrl: avatar3, isOnline: false },
    { imageUrl: avatar4, isOnline: false },
  ];
  const stateList = [
    { name: "NY", population: "120k", percentage: 1 },
    { name: "MA", population: "80k", percentage: 0.63 },
    { name: "NH", population: "70k", percentage: 0.38 },
    { name: "OR", population: "50k", percentage: 0.16 },
  ];
  const dealsList = [
    "Fruit2Go",
    "Marshall's MKT",
    "CCNT",
    "Joana Mini-market",
    "Little Brazil Vegan",
    "Organic place",
    "Morello's",
    "Target",
  ];
  return (
    <div>
      <div className={styles.mainContainer}>
        <Sidebar />
        <div className={styles.mainContent}>
          <div className={styles.cardContainer}>
            <DashboardCard
              title="Revenue"
              percentage={84}
              linkText="Revenues report"
              description="Increase compared to last week"
            />
            <DashboardCard
              title="Revenue"
              percentage={84}
              linkText="Revenues report"
              description="Increase compared to last week"
            />
            <DashboardCard
              title="Revenue"
              percentage={84}
              linkText="Revenues report"
              description="Increase compared to last week"
            />
            <ChatCard
              title="Chat"
              description="2 unread messages"
              userList={userList}
            />
            <TopStateCard title="Top States" stateList={stateList} />
            <BasicCard>
              <p>New Deals</p>
              <div className={styles.dealContainer}>
                {dealsList.map((deal, index) => (
                  <DealBanner key={index} title={deal} />
                ))}
              </div>
            </BasicCard>
          </div>
        </div>
      </div>
    </div>
  );
};
