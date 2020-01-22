import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';

import {getRaceById} from './core/actions/index.js';
import {connect} from 'react-redux';
import {getActivities} from './core/actions/rec-activities';

import AppNavigator from './Navigators/AppNavigator.js';
import NavigationService from './Services/NavigationService.js';

const App = ({getRaceById, currentRace, getRecActivities}) => {
  // async componentDidMount() {
  //   // TODO: You: Do firebase things
  //   // const { user } = await firebase.auth().signInAnonymously();
  //   // console.warn('User -> ', user.toJSON());
  //   // await firebase.analytics().logEvent('foo', { bar: '123'});
  // }

  useEffect(() => {
    getRaceById('35e0b6c0-323b-11ea-b6f6-2b4523c9324d');
    getRecActivities();
  }, []);

  useEffect(() => {
    console.info('CURRENT RACE: ', currentRace);
  }, [currentRace]);

  return (
    <AppNavigator
      // Initialize the NavigationService (see https://reactnavigation.org/docs/en/navigating-without-navigation-prop.html)
      ref={navigatorRef => {
        NavigationService.setTopLevelNavigator(navigatorRef);
      }}
    />
  );
};

const mapStateToProps = state => ({
  currentRace: state,
});

const mapDispatchToProps = dispatch => ({
  getRaceById: id => dispatch(getRaceById({id})),
  getRecActivities: () => dispatch(getActivities()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
