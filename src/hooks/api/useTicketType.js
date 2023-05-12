import useAsync from '../useAsync';
import useToken from '../useToken';

import * as ticketApi from '../../services/ticketApi';

export default function useTicketType() {
  const token = useToken();

  const {
    data: ticketType,
    loading: ticketTypeLoading,
    error: ticketTypeError,
    act: getTicketsTypes,
  } = useAsync(ticketApi.getTicketType(token), false);

  return {
    ticketType,
    ticketTypeLoading,
    ticketTypeError,
    getTicketsTypes,
  };
}
