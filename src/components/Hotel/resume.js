import { StyledSubtitle } from '../Payment/checkin';
import { ButtonReserve } from '../Payment/checkin';
import styled from 'styled-components';
import { useState } from 'react';

export default function HotelCheckoutResume(props) {
  const { roomInfo, setUserRoom } = props;
  const { id, name, capacity, Hotel, Booking } = roomInfo;
  
  return (
    <Container>
      <StyledSubtitle>Você já escolheu seu quarto:</StyledSubtitle>
      <HotelStyled id={id}>
        <img src={Hotel.image} alt='Hotel img'/>
        <h3>{Hotel.name}</h3>
        <h4>Quarto reservado</h4>
        {capacity == 1 ? 
          <p>{name}(Single)</p> :
          capacity == 2 ? 
            <p>{name}(Double)</p> :
            capacity == 3 ?
              <p>{name}(Triple)</p> :
              <p>{name}(Quadruple)</p>}
        <h4>Pessoas no seu quarto</h4>
        {Booking.length == 1 ?
          <p>Apenas você</p> :
          <p>Você e mais {Booking.length - 1}</p>
        }
      </HotelStyled>
      <ButtonReserve onClick={ () => setUserRoom('')}>Trocar de quarto</ButtonReserve>
    </Container>
  );
}

const Container = styled.div``;

const HotelStyled = styled.div`
  width: 196px;
  height: 264px;
  padding: 16px 14px;
  margin: 15px 0px;
  background-color: #FFEED2;
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
  }

  p{
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #3C3C3C;
    margin-bottom: 10px;
  }

`;
