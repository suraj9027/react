import React from 'react';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <h1>My React Application</h1>
            <p>Welcome to my website</p>
        </header>
    );
};

export default Header;