import styles from "./sidebar.module.css"
import MenuLink from "./menuLink/menuLink";
import Image from "next/image";
import { 
    MdDashboard,
    MdOutlineFavoriteBorder,
    MdOutlineReviews,
    MdAddCircleOutline,
    MdOutlineReceiptLong,
    MdOutlineTimer,
    MdContentCopy,
    MdOutlineSettings,
    MdMailOutline,
    MdLogout
} from "react-icons/md"

const menuItems = [
    {
        title: "Main",
        list: [
            {
                title: "Dashboard",
                path: "/dashboard",
                icon: <MdDashboard/>
            },
        ],
    },
    {
        title: "ADS",
        list: [
            {
                title: "Your Ads",
                path: "/dashboard/your_ads",
                icon: <MdContentCopy/>
            },
            {
                title: "Favourite Ads",
                path: "/dashboard/favourite_ads",
                icon: <MdOutlineFavoriteBorder/>
            },
            {
                title: "Auctions",
                path: "/dashboard/auctions",
                icon: <MdOutlineTimer/>
            },
        ],
    },
    {
        title: "Feedback",
        list: [
            {
                title: "Reviews",
                path: "/dashboard/reviews",
                icon: <MdOutlineReviews/>
            },
        ],
    },
    {
        title: "Transactions",
        list: [
            {
                title: "Subscription",
                path: "/dashboard/subscriptions",
                icon: <MdAddCircleOutline/>
            },
            {
                title: "Invoice",
                path: "/dashboard/invoice",
                icon: <MdOutlineReceiptLong/>
            },
        ],
    },
];

const Sidebar = () => {
    return(
        <div className={styles.container}>
            <div className={styles.user}>
                <Image className={styles.userImage} src="/noavatar.png" alt="" width="80" height="80" />
                
            </div>
            <div className={styles.user}>
                <div className={styles.userDetail}>
                    <span className={styles.userName}>User Name</span>
                    <span className={styles.userView}> View Profile </span>
                </div>
            </div>


            <div className={`${styles.profItem} ${styles.marginBottom}`}>
                <div className={styles.iconContainer}>
                    <MdOutlineSettings size={30}/>
                    <span>Settings</span>
                </div>
                <div className={styles.iconContainer}>
                    <MdMailOutline size={30}/>
                    <span>Message</span>
                </div>
                <div className={styles.iconContainer}>
                    <MdLogout size={30}/>
                    <span>Logout</span>
                </div>
            </div>


            <ul className={styles.list}>
                {menuItems.map((cat) => (
                    <li key={cat.title}>
                        <span className={styles.cat}> {cat.title} </span>
                        {cat.list.map((item) => (
                            <MenuLink item={item} key={item.title} />
                        ))}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Sidebar