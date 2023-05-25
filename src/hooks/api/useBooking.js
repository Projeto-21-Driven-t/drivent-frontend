import useAsync from '../useAsync';
import useToken from '../useToken';
import * as bookingApi from '../../services/bookingApi';

export default function useBooking() {
  const token = useToken();

  const {
    data: updateBooking,
    loading: updateBookingLoading,
    error: updateBookingError,
    act: putBooking
  } = useAsync((data, bookingId) => bookingApi.updateBooking(data, bookingId, token), false);

  return {
    updateBooking,
    updateBookingLoading,
    updateBookingError,
    putBooking
  };
}
