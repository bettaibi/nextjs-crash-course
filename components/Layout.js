import React from 'react';
import styles from '../styles/Layout.module.css';
import Footer from './Footer';
import Nav from './Nav';

const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <Nav />
            <div className={styles.container}>
                <main className={styles.main} role="main">
                    {children}
                </main>
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default Layout
