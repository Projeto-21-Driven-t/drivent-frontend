import api from './api';

export async function reservateRoom(token) {
  const response = await api.post('/booking', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  
  return response.data;
}

export async function findRoom(token) {
  const response = await api.post('/booking', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
    
  return response.data;
}
