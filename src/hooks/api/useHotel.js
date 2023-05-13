import useAsync from '../useAsync';
import useToken from '../useToken';

import * as hotelApi from '../../services/hotelApi';

export default function useHotel() {
  const token = useToken();

  const {
    data,
    loading,
    error,
    act
  } = useAsync(hotelApi.getHotels(token), false);

  return {
    data,
    loading,
    error,
    act
  };
}
