import styled from 'styled-components';
import { useState, useEffect } from 'react';
import useHotel from '../../hooks/api/useHotel';

export default function HotelList() {
  const [hotels, setHotels] = useState(['', '']);
  const { data, loading, error, act } = useHotel();
  if(error) {
    return(
      <h1>Erro 404</h1>
    );
  }
  return (
    <Screen>
      <h1>Escolha de hotel e quarto</h1>
      <h2>Primeiro, escolha seu hotel</h2>
      <Hotels>
        {hotels.map((h) =>
          <HotelStyled>
            <img src='https://cdnstatic8.com/viajandonajanela.com/wp-content/uploads/2020/09/Hotel-Valle-Dincanto-2-melhores-hoteis-booking-1.jpg?w=853&ssl=1' alt='Hotel img'/>
            <h3>Hotel</h3>
            <h4>Tipos de acomodação:</h4>
            <p>Single e Double</p>
            <h4>Tipos de acomodação:</h4>
            <p>Single e Double</p>
          </HotelStyled>
        )}
      </Hotels>
    </Screen>
  );
}

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
  }
`;
