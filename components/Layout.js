import React from 'react';
import styles from '../styles/Layout.module.css';
import Nav from './Nav';

const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <Nav />
            <div className={styles.container}>
                <main className={styles.main}>
                    {children}
                </main>
            </div>
        </React.Fragment>
    )
}

export default Layout
