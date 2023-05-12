import styled from 'styled-components';
import { useState, useEffect } from 'react';
import useHotel from '../../hooks/api/useHotel';

export default function HotelList() {
  const [hotels, setHotels] = useState(['', '']);
  const hotelsRequest = useHotel();
  if(hotelsRequest.error) return(<>nada por aqui</>);
  
  return (
    <>
      <h1>Hotels</h1>
      <Hotels>
        {hotels.map((h) => <HotelStyled><h1>Hotel</h1></HotelStyled>)}
      </Hotels>
    </>
  );
}

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
  margin:19px;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items:flex-start;

  img{
    width: 158px;
    height: 109px;
    border-radius: 5px;
  }

  h1{
    font-size:20px;
    color: #343434;
  }

  h2{
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    color: #3C3C3C;
  }

  p{
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #3C3C3C;
  }
`;
