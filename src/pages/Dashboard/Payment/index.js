import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

import TicketAndPayment from '../../../components/Payment';
import useEnrollment from '../../../hooks/api/useEnrollment';

export default function Payment() {
  const { enrollment } = useEnrollment();

  return (
    <>
      <StyledTypography variant='h4'>Ingresso e pagamento</StyledTypography>
      
      {enrollment ? (
        <TicketAndPayment enrollment={enrollment} />
      ): (
        <SubscriptionBoxMessage>
          <h4>Você precisa completar sua inscrição antes de prosseguir pra escolha de ingresso</h4>
        </SubscriptionBoxMessage>
      )}
    </>

  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px!important;
`;

const SubscriptionBoxMessage = styled.div`
width: 420px;
height: 46px;
margin: 243px auto;
text-align: center;
  h4{
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: #8E8E8E;
  }
`;
