import { clsx } from "clsx"
import styles from "./dashboardCard.module.css"
import { Link } from "react-router-dom"
import greenArrow from "../../assets/images/greenUpArrow.png"
import { BasicCard } from "./basicCard"

type DashboardCardProps={
    classname?:string
    title:string
    linkText:string
    percentage: number
    description:string
   
}

export const DashboardCard:React.FunctionComponent<DashboardCardProps> =(props)=>{

return(
    <BasicCard>
        <div className={clsx(props.classname, styles.dashboardCard)}>
            <p className={styles.title}>{props.title}</p>
          
        <div className={styles.percentageContainer}>
            <p className={styles.percentage}> {`${props.percentage} %`}</p>
            <img src={greenArrow} alt="" />
        </div>
        <p className={styles.description}>{props.description}</p>
            <Link to="/" className={styles.link}>{props.linkText}</Link>
        </div>
    </BasicCard>
   
)
}