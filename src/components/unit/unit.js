import React, { useState } from 'react';
import styles from './unit.module.css';
import ShowName from '../showname';
import EditName from '../editname';
import { connect } from 'react-redux';
import { deleteUnit } from '../../redux/actions';

const Unit = ({ name, id, deleteUnit }) => {
    const [editNameFlag, setEditNameFlag] = useState(false)
    return (
        <div className={styles.wrapper}>
            
            <div className={styles.imaga}></div>
            { editNameFlag ? 
                <EditName id={id} name={name} setEditNameFlag={setEditNameFlag}/> : 
                <ShowName id={id} name={name}/>
            }
            
            <div className={styles.btns}>
                <button 
                    className={styles.edit_btn}
                    onClick={(e) => setEditNameFlag(() => !editNameFlag)}
                >
                    Изменить имя
                </button>

                <button 
                    className={styles.delete_btn}
                    onClick={(e) => deleteUnit(id)}
                >
                    Удалить
                </button>
            </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        deleteUnit: (id) => dispatch(deleteUnit({ id })),
    }
}
  
export default connect(null, mapDispatchToProps)(Unit);

