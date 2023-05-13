import api from './api';

export async function getTicketType(token) {
  const response = await api.get('/tickets/types', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function getTicket(token) {
  const response = await api.get('tickets', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log(response);
  return response.data;
}

export async function postTicketTypeId(body, token) {
  const response = await api.post('/tickets', body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}
