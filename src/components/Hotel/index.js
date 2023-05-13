import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

import Checkin from '../Payment/checkin';
import useEnrollment from '../../hooks/api/useEnrollment';
import Checkout from '../Payment/checkout';
import useTicket from '../../hooks/api/useTicket';
import { useEffect, useState } from 'react';
import useHotels from '../../hooks/api/useHotel';

export default function TicketAndPayment() {
  const { enrollment } = useEnrollment();
  const { ticketLoading, getTickets } = useTicket();
  const { getHotels } = useHotels(); 
  const [ticket, setTicket] = useState();
  const [hotels, setHotels] = useState([]);

  async function fetchTicketAndHotels() {
    try {
      const ticket = await getTickets();
      setTicket(ticket);
      const hotels = await getHotels();
      setHotels(hotels);
    } catch (error) {
      return;
    }
  }

  useEffect(() => {
    fetchTicketAndHotels();
  }, []);

  return (
    <Screen>
      <h1>Escolha de hotel e quarto</h1>
      {enrollment}
    </Screen>
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

const Screen = styled.div`
  h1{
    font-size: 34px;
    line-height: 40px;
    margin: 34px 0px 36px 0px;
  }

  h2{
    font-size: 20px;
    line-height: 23px;
    margin-bottom: 18px;
    color: #8E8E8E;
  }
`;

const Hotels = styled.div`
  display:flex;
  width: 100%;
  flex-wrap: wrap ;
`;

const HotelStyled = styled.div`
  width: 196px;
  height: 264px;
  padding: 16px 14px;
  background-color: #EBEBEB;
  margin-right:19px;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items:flex-start;
  transition:all linear .2s;

  font-family: "Roboto", sans-serif;

  img{
    width: 168px;
    height: 109px;
    border-radius: 5px;
  }

  h3{
    font-size:20px;
    color: #343434;
    margin: 10px 0px;
  }

  h4{
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    color: #3C3C3C;
    margin-bottom: 2px;
  }

  p{
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #3C3C3C;
    margin-bottom: 14px;
  }

  &:hover{
    background-color: #C1C1C1;

    img{
      width: 174px;
      height: 115px;
      margin-left: -2px;
    }
  }
  
`;
