import api from './api';

export async function getActivities(token) {
  const response = await api.get('/activities', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function scheduleActivity(token, body) {
  const response = await api.post('/activities', body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function deleteScheduledActivity(token, activityId) {
  const response = await api.delete(`/activities/${activityId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response;
}
