import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from './LayoutLogin.module.scss'
const LayoutLogin = () => {
    return (
        <div>
             <div className={styles.container}>
                <Link to={"/"} className={styles.shopLink}>فروشگاه</Link>
            </div>
            <main>
                <Outlet/>
            </main>
        </div>
    );
};

export default LayoutLogin;