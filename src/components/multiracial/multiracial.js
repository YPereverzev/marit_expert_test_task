import React from 'react';
import { connect } from 'react-redux';
import {
    HUMAN,
    DWORF,
    ELF,
    HOBBIT
} from '../../redux/constants'
import { 
    hobbitSelector,
    elfSelector,
    dworfSelector,
    humanSelector,
} from '../../redux/reducer/selectors';
import Race from '../race';
import styles from './multiracial.module.css';

const MultiRacial = ({ hobbits, dworfs, humans, elfs }) => {
    return (<>
       <div className={styles.grid} >
        <Race race={HOBBIT} units={hobbits} />
        <Race race={HUMAN} units={humans} />                
        <Race race={DWORF} units={dworfs} />                
        <Race race={ELF} units={elfs} />                
       </div>
      </>
    );
}

function mapStateToProps(state) {
    return {
        hobbits: hobbitSelector(state),
        elfs: elfSelector(state),
        dworfs: dworfSelector(state),
        humans: humanSelector(state),
    };
}

export default connect(mapStateToProps)(MultiRacial);