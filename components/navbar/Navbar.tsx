import React, { useState } from 'react';
import styles from './Navbar.module.scss';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <nav className={styles.navbar}>
            <div className={styles.navbarContainer}>
                <div className={styles.brand}>
                    <img src="./svg/kaapo-fit.svg" alt="kaapo.fit logo" />
                </div>
                <div
                    className={`${styles.menuToggle} ${isOpen ? styles.active : ''}`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <div className={styles.bar1}></div>
                    <div className={styles.bar2}></div>
                    <div className={styles.bar3}></div>
                </div>
                <div className={`${styles.navLinks} ${isOpen ? styles.navLinksActive : ''}`}>
                    <ul className={styles.navLinksBox}>
                        <li className={styles.navLink}>
                            <a href="">Home</a>
                        </li>
                        <li className={styles.navLink}>
                            <a href="">Trainers</a>
                        </li>
                        <li className={styles.navLink}>
                            <a href="">Nutritions</a>
                        </li>
                        <li className={styles.navLink}>
                            <a href="">Gyms</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
