import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import TicketAndPaymentButton from './TicketAndPaymentButton';

export default function TicketAndPayment() {
//      const model = {
//     id: 1,
//     name: 'blabla',
//     price: 200,
//     isRemote: true,
//     includesHotel: true
//   };
  return (
    <>
      <StyledTypography variant='h4'>Ingresso e pagamento</StyledTypography>
      <StyledSubtitle variant='h6'>Primeiro, escolha sua modalidade de ingresso</StyledSubtitle>
      <TicketAndPaymentButton/>
      
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px!important;
`;

const StyledSubtitle = styled(Typography)`
margin-top: 37px!important;
size: 20px!important;
color: #8E8E8E !important;
`;
