import { StyledSubtitle } from '../Payment/checkin';
import Hotel from './hotel';
import { ButtonReserve } from '../Payment/checkin';
import styled from 'styled-components';

export default function HotelCheckoutResume(roomInfo, changeRoom, setChangeRoom) {
  return (
    <Container>
      <StyledSubtitle>Você já escolheu seu quarto:</StyledSubtitle>
      <Hotel props={roomInfo} disabled={true} />
      <ButtonReserve>Trocar de quarto</ButtonReserve>
    </Container>
  );
}

const Container = styled.div``;
