import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

import Checkin from './checkin';
import useEnrollment from '../../hooks/api/useEnrollment';
import Checkout from './checkout';

export default function TicketAndPayment() {
  const { enrollment } = useEnrollment();

  const ticket = {
    TicketType: {
      name: 'blabla',
      price: 400,
    },
  };
  return (
    <>
      <StyledTypography variant="h4">Ingresso e pagamento</StyledTypography>

      {enrollment ? (
        ticket ? (
          <Checkout ticket={ticket} />
        ) : (
          <Checkin enrollment={enrollment} />
        )
      ) : (
        <SubscriptionBoxMessage>
          <h4>Você precisa completar sua inscrição antes de prosseguir pra escolha de ingresso</h4>
        </SubscriptionBoxMessage>
      )}
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;

const SubscriptionBoxMessage = styled.div`
  width: 420px;
  height: 46px;
  margin: 243px auto;
  text-align: center;
  h4 {
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: #8e8e8e;
  }
`;
