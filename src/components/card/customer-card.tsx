import styles from "./customer-card.module.css";
import { BasicCard } from "./basicCard";
import { CustomerItem, CustomerItemProps } from "./customer-item";
import chris from "../../assets/images/customer/chris.png"
import maggie from "../../assets/images/customer/maggie.png"
import gael from "../../assets/images/customer/gael.png"
import jenna from "../../assets/images/customer/jenna.png"

const customerList: CustomerItemProps[] =[
    {
        name: "Chris Friedkly",
        image: chris,
        location:"Supermarket Villanova"
    },
    {
        name: "Maggie Johnson",
        image: maggie,
        location:"Oasis Organic Inc."
    },
    {
        name: "Gael Harry",
        image: gael,
        location:"New York Finest Fruits"
    },
    {
        name: "Jenna Sullivan",
        image: jenna,
        location:"Walmart"
    }
]

export const CustomerCard: React.FunctionComponent= () => {
  return (
    <BasicCard>
      <div>
        <div className={styles.titleContainer}>
        <p className={styles.title}>Customer</p>
        <p className={styles.sort}>Sort by newest</p>
        </div>
        <div className={styles.customerItemsContainer}>
          {customerList.map((customer, index) => (
            <CustomerItem key={index} name={customer.name} image={customer.image} location={customer.location}/>
          ))}
        </div>
      </div>
    </BasicCard>
  );
};
