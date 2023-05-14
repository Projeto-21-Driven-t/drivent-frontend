import styled from 'styled-components';
import { useState } from 'react';

export default function Hotel(props) {
  const { id, name, image, setSelectedHotel, setDisplayRooms } = props;

  function hotelClick(hotelId) {
    setSelectedHotel(hotelId);
    setDisplayRooms(true);
  }

  return (
    <HotelStyled onClick={() => hotelClick(id)}>
      <img src={image} alt='Hotel img' />
      <h3>{name}</h3>
      <h4>Tipos de acomodação:</h4>
      <p>Single e Double</p>
      <h4>Vagas disponíveis:</h4>
      <p>25</p>
    </HotelStyled>
  );
}

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
      margin-left: -3px;
    }
  }
`;
