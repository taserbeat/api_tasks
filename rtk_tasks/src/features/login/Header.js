import React from 'react';
import styles from './Header.module.css';
import { useSelector } from 'react-redux';
import { selectProfile } from './loginSlice';

const Header = () => {
    const profile = useSelector(selectProfile);

    return (
        <div className={styles.header}>
            <h3>{`ようこそ。${profile.username}さん。`}</h3>
            <h1>Today's tasks</h1>
        </div>
    )
}

export default Header;
