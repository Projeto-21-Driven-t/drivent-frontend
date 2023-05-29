import useAsync from '../useAsync';
import useToken from '../useToken';

import * as activityApi from '../../services/activityApi';

export function getActivities() {
  const token = useToken();

  const {
    data: activities,
    loading: activitiesLoading,
    error: activitiesError,
    act: getActivities,
  } = useAsync(() => activityApi.getActivities(token), false);

  return {
    activities,
    activitiesLoading,
    activitiesError,
    getActivities,
  };
}

export function scheduleActivity(activityId, startsAt) {
  const token = useToken();

  const {
    data: activity,
    loading: scheduleActivityLoading,
    error: scheduleActivityError,
    act: scheduleActivity,
  } = useAsync((body) => activityApi.scheduleActivity(token, body), false);

  return {
    activity,
    scheduleActivityLoading,
    scheduleActivityError,
    scheduleActivity,
  };
}

export function deleteScheduledActivity(activityId) {
  const token = useToken();

  const {
    data: deletedSchedule,
    loading: deleteScheduleLoading,
    error: deleteScheduleError,
    act: deleteScheduledActivity,
  } = useAsync((activityId) => activityApi.deleteScheduledActivity(token, activityId), false);

  return {
    deletedSchedule,
    deleteScheduleLoading,
    deleteScheduleError,
    deleteScheduledActivity,
  };
}

export default { getActivities, scheduleActivity, deleteScheduledActivity };
