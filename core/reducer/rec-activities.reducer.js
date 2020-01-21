import {RecActivitiesActions} from '../actions/rec-activities';

const INITIAL_STATE = {
  loading: {
    getRecActivities: false,
  },
  loaded: {
    getRecActivities: false,
  },
  recActivities: [],
  currentRecActivity: {
    name: '',
    id: '',
  },
};

const recActivitiesState = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RecActivitiesActions.GET_ACTIVITIES: {
      return {
        ...state,
        loading: {
          ...state.loading,
          getRecActivities: true,
        },
        loaded: {
          ...state.loaded,
          getRecActivities: false,
        },
      };
    }
    case RecActivitiesActions.GET_ACTIVITIES_SUCCESS: {
      return {
        ...state,
        loading: {
          ...state.loading,
          getRecActivities: false,
        },
        loaded: {
          ...state.loaded,
          getRecActivities: true,
        },
        recActivities: action.payload,
      };
    }
    case RecActivitiesActions.GET_ACTIVITIES_FAILURE: {
      return {
        ...state,
        loading: {
          ...state.loading,
          getRecActivities: false,
        },
        loaded: {
          ...state.loaded,
          getRecActivities: false,
        },
      };
    }
    default:
      return state;
  }
};

export default recActivitiesState;
