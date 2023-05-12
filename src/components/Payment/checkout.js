import TicketAndPaymentButton from './TicketAndPaymentButton.js';
import { StyledSubtitle, ButtonReserve } from './checkin.js';

export default function Checkout({ ticket }) {
  return (
    <>
      <StyledSubtitle>Ingresso escolhido</StyledSubtitle>
      <TicketAndPaymentButton
        title={ticket.TicketType?.name || 'nome'}
        price={ticket.TicketType?.price || '1000'}
        toggle = {() => {}}
        selected = {true}
        plusSign = {false}
        disabled={true}
        width={'290px'}
        height={'108px'}
      />
      <StyledSubtitle>
        Pagamento
      </StyledSubtitle>

    </>
  );
}
