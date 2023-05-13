import useAsync from '../useAsync';
import useToken from '../useToken';

import * as hotelApi from '../../services/hotelApi';

export default function useHotel() {
  const token = useToken();

  const { data: hotels } = useAsync(() => hotelApi.getHotels(token));

  console.log('Executou o useHotels');

  return hotels;
}
