import api from './api';

export async function updateBooking(body, token, bookingId) {
    const response = await api.put(`/booking/${bookingId}`, body, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return response.data;
}