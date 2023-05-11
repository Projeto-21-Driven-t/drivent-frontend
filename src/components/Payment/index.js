import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import TicketAndPaymentButton from './TicketAndPaymentButton';
import { useState, useEffect } from 'react';

export default function TicketAndPayment() {
  const [ sendData, setSendData ] = useState([]);
  const [ accommodationVisibility, setAccommodationVisibility ] = useState(false);
  const [ bookingButtonVisibility, setBookingButtonVisibility ] = useState(false);
  const [ accomodationPrice, setAccomodationPrice ] = useState(0);
  const [ hotelPrice, setHotelPrice ] = useState(0);
  const [ onlineSelected, setOnlineSelected ] = useState(false);
  const [ presencialSelected, setPresencialSelected ] = useState(false);
  const [ comHotelSelected, setComHotelSelected ] = useState(false);
  const [ semHotelSelected, setSemHotelSelected ] = useState(false);

  const model = {
    id: 1,
    name: 'blabla',
    price: 200,
    isRemote: true,
    includesHotel: true
  };

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

  return (
    <>
      <StyledTypography variant='h4'>Ingresso e pagamento</StyledTypography>
      <StyledSubtitle variant='h6'>Primeiro, escolha sua modalidade de ingresso</StyledSubtitle>
      <div>
        <TicketAndPaymentButton 
          title='Presencial' 
          price={250}
          toggle={presencialTypeClick}
          selected={presencialSelected}
        />
        <TicketAndPaymentButton 
          title='Online' 
          price={100}
          toggle={onlineTypeClick}
          selected={onlineSelected}
        />
      </div>
      {accommodationVisibility ? (
        <>
          <StyledSubtitle variant='h6'>Ótimo! Agora escolha sua modalidade de hospedagem</StyledSubtitle>
          <div>
            <TicketAndPaymentButton 
              title='Sem hotel' 
              price={0}
              toggle={semHotelClick}
              selected={semHotelSelected}
            />
            <TicketAndPaymentButton 
              title='Com hotel' 
              price={350}
              toggle={comHotelClick}
              selected={comHotelSelected}
            />
          </div>
        </>
      ) : null
      } 
      {semHotelSelected || comHotelSelected || onlineSelected ? (
        <>
          <StyledSubtitle variant='h6'>Fechado! O total ficou em R${hotelPrice+accomodationPrice}. Agora é só confirmar:</StyledSubtitle>
          <button> RESERVAR INGRESSO </button>
        </>      
      ) : null
      } 
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
