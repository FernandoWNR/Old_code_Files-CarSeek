import Card from "../ui/dashboard/card/card"
import styles from "../ui/dashboard/dashboard.module.css"

const Dashboard = () => {
    return(
        <div className={styles.wrapper}>
            <div className={styles.main}>
                <div className={styles.cards}>
                    <Card 
                        title="Subscription Expires"
                        val="March 25, 2024"
                        description="Account submission type."
                    />
                    <Card 
                        title="Siubmitted Ads"
                        val="0"
                        description="Number if submitted ads."
                    />
                    <Card 
                        title="Your Rating"
                        val="0.00 / 5.0"
                        description="Based on all your ads. "
                    />
                    <Card 
                        title="Favourite Ads"
                        val="0"
                        description="Number of ads you liked."
                    />
                </div>
            </div>
        </div>
    )
}

export default Dashboard