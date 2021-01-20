import React from 'react';
import styles from './showname.module.css';

const ShowName = ({ name, id, deleteUnit }) => {
    return (
        <div className={styles.wrapper}>
            Имя: {name}
        </div>
    );
};

  
export default ShowName;