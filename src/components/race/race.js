import React, { useState } from 'react';
import Unit from '../unit'
import { Link } from 'react-router-dom'
import styles from './race.module.css'

const Race = ({ units, race }) => {
    const [addingUnit, setAddingUnit] = useState(false)
    return (
        <div className={styles.wrapper}>
            Раса: {race}<br></br>
            <div className={styles.btnWrapper}>
                <Link to={`/${race}`} >
                    <button onClick={(e) => setAddingUnit(() => !addingUnit)}>
                        Добавить
                    </button>
                </Link>
            </div>
            
            {units.map((unit) => <Unit key={unit.id} id={unit.id} name={unit.name}/>)}
        </div>
    );
};
  
export default Race;