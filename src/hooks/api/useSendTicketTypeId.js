import useAsync from '../useAsync';
import useToken from '../useToken';

import * as ticketApi from '../../services/ticketApi';

export default function useSendTicketTypeId() {
  const token = useToken();

  const {
    loading: sendTicketTypeIdLoading,
    error: sendTicketTypeIdError,
    act: sendTicketTypeId
  } = useAsync((data) => ticketApi.postTicketTypeId(data, token), false);

  return {
    sendTicketTypeIdLoading,
    sendTicketTypeIdError,
    sendTicketTypeId
  };
}
