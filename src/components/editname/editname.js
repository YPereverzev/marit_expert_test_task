import React, { useState } from 'react';
import styles from './editname.module.css';
import { renameUnit } from '../../redux/actions';
import { connect } from 'react-redux'

const EditName = ({ id, name, renameUnit, setEditNameFlag}) => {
    const [newName, setNewName] = useState('');
    return (
        <div className={styles.wrapper}>
             <label>
                Имя:
                <input 
                    className={styles.newNameInput}
                    type="text" 
                    name="name" 
                    placeholder={name}
                    onChange={(e) => setNewName(e.currentTarget.value)} 
                />
            </label>
            
            <button 
                onClick={(e) => {
                    setEditNameFlag(false);
                    return renameUnit({ newName, id })}
            }>
               Сохранить
            </button>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        renameUnit: ({ newName, id }) => dispatch(renameUnit({ newName, id })),
    }
}

export default connect(null, mapDispatchToProps)(EditName);