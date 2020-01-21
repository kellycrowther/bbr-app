import {combineReducers} from 'redux';
import racesState from './races.reducer';
import recActivitiesState from './rec-activities.reducer';

export default combineReducers({
  racesState,
  recActivitiesState,
});
