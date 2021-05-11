import React from 'react';
import Link from 'next/link';
import navbarStyle from '../styles/Nav.module.css';

const Nav = () => {
    return (
        <header className = {navbarStyle.nav}>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
            </ul>
        </header>
    )
}

export default Nav

