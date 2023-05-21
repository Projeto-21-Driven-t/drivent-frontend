import api from './api';

export async function reservateRoom(token, roomId) {
  const response = await api.post('/booking', { roomId }, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  
  return response.data;
}

export async function findRoom(token) {
  const response = await api.get('/booking/check', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
    
  return response.data;
}

export async function changeBooking(token, roomId) {
  const response = await api.put(`/booking/${roomId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
    
  return response.data;
}
