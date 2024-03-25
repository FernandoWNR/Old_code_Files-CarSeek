import styles from './your_ads.module.css'

const Your_Ads = () => {

    return(
        <div className={styles.content}>
            <h3 className={styles.title}>Your Posted Ads</h3>

            <div className={styles.select}>
                <div className={styles.select1}>
                    <h5>All</h5>
                </div>
                <div className={styles.select2}>
                    <h5>Live</h5>
                </div>
                <div className={styles.select3}>
                    <h5>Expired</h5>
                </div>
                <div className={styles.select4}>
                    <h5>Sold</h5>
                </div>

                <div className={styles.list}>
                    <span>Filter Ads: </span>
                    <select className='bg-slate-300 p-4 m-0 w-full flex items-center text-slate-500 justify-between font-medium text-lg rounded-lg tracking-wider border-transparent active:border-green-400 duration-300  '>Sort By
                        <option value={"live"}>Live</option>
                        <option value={"expired"}>Expired</option>
                        <option value={"sold"}>Sold</option>
                    </select>

                    <select className='bg-slate-300 p-4 m-0 w-full flex items-center text-slate-500 justify-between font-medium text-lg rounded-lg tracking-wider border-transparent active:border-green-400 duration-300  '>Sort By
                        <option value={"ascending"}>Ascending</option>
                        <option value={"descending"}>Descending</option>
                    </select>

                    <select className='bg-slate-300 p-4 m-0 w-full flex items-center text-slate-500 justify-between font-medium text-lg rounded-lg tracking-wider border-transparent active:border-green-400 duration-300  '>Sort By
                        <option value={"all"}>All Types</option>
                        <option value={"car"}>Car</option>
                        <option value={"van"}>Van</option>
                    </select>
                </div>
                
            </div>
        </div>
    )
}

export default Your_Ads