import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { addUnit } from '../../redux/actions';
import styles from './addunit.module.css';

const AddUnit = ({ addUnit, match }) => {
    const [name, setName] = useState(false)
    const race = match.params.race
    return (
        <div className={styles.wrapper}>
            <label>
                <span>
                    Имя:
                </span> <br></br>
                <input 
                    className={styles.newName}
                    type="text" 
                    name="name" 
                    onChange={(e) => setName(e.currentTarget.value)} 
                />
            </label>
            <div className={styles.btnsWrapper}>
                <Link to='/'>
                    <button>
                        Назад
                    </button>
                </Link>

                <Link to='/'>
                    <button 
                        className={styles.addBtn}
                        onClick={(e) => name && addUnit({ name, race })}
                    >
                        Сохранить
                    </button>
                </Link>
            </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        addUnit: ({ name, race }) => dispatch(addUnit({ name, race })),
    }
}

export default connect(null, mapDispatchToProps)(AddUnit);