import 'rxjs';
import {combineEpics} from 'redux-observable';
import {ajax} from 'rxjs/ajax';
import {of, from} from 'rxjs';
import {mergeMap, takeUntil, map, retry, catchError} from 'rxjs/operators';
import {ofType} from 'redux-observable';
import {RacesActions, getRaceByIdFailure, getRaceByIdSuccess} from '../actions';
import config from '../../config';
import {
  RecActivitiesActions,
  getActivitiesSuccess,
  getActivitiesFailure,
} from '../actions/rec-activities';
import firebase from 'react-native-firebase';

const endpoint = config.API_ENDPOINT;

export const getRace = actions$ => {
  return actions$.pipe(
    ofType(RacesActions.GET_RACE_BY_ID),
    mergeMap(action => {
      const id = action.payload.id;
      return ajax({
        url: `${endpoint}/races/${id}`,
        method: 'GET',
      }).pipe(
        map(races => getRaceByIdSuccess(races.response)),
        takeUntil(actions$.ofType(RacesActions.GET_RACE_BY_ID_SUCCESS)),
        retry(2),
        catchError(error => of(getRaceByIdFailure())),
      );
    }),
  );
};

export const getRecActivities = actions$ => {
  return actions$.pipe(
    ofType(RecActivitiesActions.GET_ACTIVITIES),
    mergeMap(action => {
      const request = from(
        firebase
          .firestore()
          .collection('recActivities')
          .get(),
      );
      return request.pipe(
        map(res => {
          console.info('RESPONSE: ', res);
          // ids = res.docs.map(doc => doc.id);
          documents = res.docs.map(doc => doc.data());
          console.info('DOCUMENTS: ', documents);
          return getActivitiesSuccess(documents);
        }),
        takeUntil(actions$.ofType(RecActivitiesActions.GET_ACTIVITIES_SUCCESS)),
        retry(2),
        catchError(error => of(getActivitiesFailure())),
      );
    }),
  );
};

export default combineEpics(getRace, getRecActivities);
