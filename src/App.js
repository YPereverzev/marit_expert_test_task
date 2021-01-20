import './App.css';
import React, { useEffect } from 'react';
import { loadUnits } from './redux/actions';
import { connect} from 'react-redux'
import MultiRacial from './components/multiracial';
import {
  unitsLoadingSelector,
  unitsLoadedSelector,
  unitsLoadingErrorSelector,
} from './redux/reducer/selectors'

import { Route } from 'react-router-dom';
import Loader from './components/loader';
import AddUnit from './components/addunit'
import styles from './app.module.css';

function App({
  loadUnits, 
  loading, 
  loaded, 
  error
}) {
  useEffect(() => {
    if (!loaded) loadUnits();
  }, []) //eslint-disable-line
  if (loading || !loaded) return <Loader />;

  return (
    <div className={styles.main}>
      <Route path="/" exact component={MultiRacial}></Route>
      <Route path="/:race" exact component={AddUnit}></Route>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    loading: unitsLoadingSelector(state),
    loaded: unitsLoadedSelector(state),
    error: unitsLoadingErrorSelector(state),
  };
};

export default connect(mapStateToProps, { loadUnits })(App);
