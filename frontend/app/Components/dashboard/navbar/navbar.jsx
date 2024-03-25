"use client"
import Link from 'next/link';
import styles from './navbar.module.css'
import { MdPostAdd } from "react-icons/md";

const Navbar = () => {
    return(

        <nav className={styles.nav}>
            
            <div className={styles.navall}>
                <div className={styles.navContainer}>
                    <div>
                        <Link href={""} className={styles.navmenu}>Home</Link>
                    </div>
                    <div>
                        <Link href={""} className={styles.navmenu}>Browse Ads</Link>
                    </div>
                    <div>
                        <Link href={""} className={styles.navmenu}>News</Link>
                    </div>
                    <div>
                        <Link href={""} className={styles.navmenu}>Pages</Link>
                    </div>
                    <div>
                        <Link href={""} className={styles.navmenu}>Contacts</Link>
                    </div>
                </div>

                <div>
                    <button className={styles.button}>
                        <span className={styles.icon}><MdPostAdd size={30} /></span>
                        <span className={styles.text}>Post Ad</span>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar