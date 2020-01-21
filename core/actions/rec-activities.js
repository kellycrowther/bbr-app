export const RecActivitiesActions = {
  GET_ACTIVITIES: '[Rec Activities] Get Activities',
  GET_ACTIVITIES_SUCCESS: '[Rec Activities] Get Activities Success',
  GET_ACTIVITIES_FAILURE: '[Rec Activities] Get Activities Failure',
};

export const getActivities = payload => ({
  type: RecActivitiesActions.GET_ACTIVITIES,
  payload,
});

export const getActivitiesSuccess = payload => ({
  type: RecActivitiesActions.GET_ACTIVITIES_SUCCESS,
  payload,
});

export const getActivitiesFailure = payload => ({
  type: RecActivitiesActions.GET_ACTIVITIES_FAILURE,
  payload,
});
