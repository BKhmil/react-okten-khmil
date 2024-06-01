import React from 'react';
import styles from './HomePage.module.css';

const HomePage = () => {
    return (
        <div className={styles.main}>
            {/* тут просто щоб видно було що це home page */}
            <h1 style={{textAlign: 'center'}}>
                Hello admin!!!
                <br/>
                Here you can view information about users from our site
            </h1>
        </div>
    );
};

export default HomePage;