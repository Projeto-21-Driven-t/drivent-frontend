import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import TicketAndPaymentButton from './TicketAndPaymentButton';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import useTicketType from '../../hooks/api/useTicketType';
import useSendTicketTypeId from '../../hooks/api/useSendTicketTypeId';

export default function Checkin(enrollment) {
  const [accommodationVisibility, setAccommodationVisibility] = useState(false);
  const [bookingButtonVisibility, setBookingButtonVisibility] = useState(false);
  const [accomodationPrice, setAccomodationPrice] = useState(0);
  const [hotelPrice, setHotelPrice] = useState(0);
  const [onlineSelected, setOnlineSelected] = useState(false);
  const [presencialSelected, setPresencialSelected] = useState(false);
  const [comHotelSelected, setComHotelSelected] = useState(false);
  const [semHotelSelected, setSemHotelSelected] = useState(false);
  const { sendTicketTypeId } = useSendTicketTypeId();

  const { ticketType } = useTicketType();

  console.log('ticket type INDEX:', ticketType);

  function onlineTypeClick() {
    setAccomodationPrice(100);
    setHotelPrice(0);
    setPresencialSelected(false);
    setComHotelSelected(false);
    setSemHotelSelected(false);
    setOnlineSelected(!onlineSelected);
    setAccommodationVisibility(false);
    setBookingButtonVisibility(!bookingButtonVisibility);
  }

  function presencialTypeClick() {
    setAccomodationPrice(250);
    setOnlineSelected(false);
    setComHotelSelected(false);
    setSemHotelSelected(false);
    setPresencialSelected(!presencialSelected);
    setBookingButtonVisibility(false);
    setAccommodationVisibility(!accommodationVisibility);
  }

  function semHotelClick() {
    setHotelPrice(0);
    setComHotelSelected(false);
    setOnlineSelected(false);
    setSemHotelSelected(!semHotelSelected);
    setBookingButtonVisibility(!bookingButtonVisibility);
  }

  function comHotelClick() {
    setHotelPrice(350);
    setOnlineSelected(false);
    setSemHotelSelected(false);
    setComHotelSelected(!comHotelSelected);
    setBookingButtonVisibility(!bookingButtonVisibility);
  }

  const bookTicket = async(data) => {
    console.log('reservando o ticket');
    try{
      sendTicketTypeId(data);
      toast('Informações salvas com sucesso!');
      window.location.reload(false);
      return true;
    } catch(err) {
      console.log(err);
      toast('Não foi possível salvar suas informações!');
      return false;
    }
  };

  async function checkTicketType() {
    if(onlineSelected) {
      bookTicket({ ticketTypeId: ticketType[0].id });
    }else if(comHotelSelected) {
      bookTicket({ ticketTypeId: ticketType[1].id  });
    }else if(semHotelSelected) {
      bookTicket({ ticketTypeId: ticketType[2].id  });
    }
  }

  return (
    <>
      <StyledSubtitle variant="h6">Primeiro, escolha sua modalidade de ingresso</StyledSubtitle>
      <Wrapper>
        <TicketAndPaymentButton
          title="Presencial"
          price={250}
          toggle={presencialTypeClick}
          selected={presencialSelected}
        />
        <TicketAndPaymentButton title="Online" price={100} toggle={onlineTypeClick} selected={onlineSelected} />
      </Wrapper>
      {accommodationVisibility ? (
        <>
          <StyledSubtitle variant="h6">Ótimo! Agora escolha sua modalidade de hospedagem</StyledSubtitle>
          <Wrapper>
            <TicketAndPaymentButton
              title="Sem hotel"
              price={0}
              plusSign={true}
              toggle={semHotelClick}
              selected={semHotelSelected}
            />
            <TicketAndPaymentButton
              title="Com hotel"
              price={350}
              plusSign={true}
              toggle={comHotelClick}
              selected={comHotelSelected}
            />
          </Wrapper>
        </>
      ) : null}
      {semHotelSelected || comHotelSelected || onlineSelected ? (
        <>
          <StyledSubtitle variant="h6">
            Fechado! O total ficou em <span>R$ {hotelPrice + accomodationPrice}</span>. Agora é só confirmar:
          </StyledSubtitle>
          <ButtonReserve onClick={() => checkTicketType()}> RESERVAR INGRESSO </ButtonReserve>
        </>
      ) : null}
    </>
  );
}

export const StyledSubtitle = styled(Typography)`
  margin-top: 37px !important;
  size: 20px !important;
  color: #8e8e8e !important;
  span {
    font-weight: 900;
  }
`;

export const ButtonReserve = styled.button`
  cursor: pointer;
  margin-top: 10px;
  width: fit-content;
  height: 37px;
  border: none;
  background: #e0e0e0;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #000000;
`;

const Wrapper = styled.div`
  display: flex;
`;
