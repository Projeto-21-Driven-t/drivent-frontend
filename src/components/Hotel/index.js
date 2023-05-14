/* eslint-disable */
import styled from 'styled-components';
import { BsPerson, BsFillPersonFill } from 'react-icons/bs';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import * as hotelApi from '../../services/hotelApi';
import useToken from '../../hooks/useToken';
import { useState, useEffect } from 'react';
import useHotels from '../../hooks/api/useHotel';
import Hotel from './hotel';

export function HotelList() {
  const [dataRooms, setDataRooms] = React.useState(null);
  const [displayRooms, setDisplayRooms] = React.useState(false)
  const [selectedRoom, setSelectedRoom] = React.useState('')
  const [selectedHotel, setSelectedHotel] = React.useState(0)
  const [hotels, setHotels] = useState([]);
  const [hotelError, setHotelError] = useState('');
  const { getHotels } = useHotels();

  const token = useToken();

  const getHotelRequest = async (token) => {

    const response = await hotelApi.performGetHotel(token, selectedHotel);
    return response;
  };

    React.useEffect(() => {
        const fetchData = async () => {
            try {
              const result = await getHotelRequest(token);
              setDataRooms(result.Rooms);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, [token, selectedHotel]);

    React.useEffect(() => {
      const fetchData = async () => {
          try {
            const hotels = await getHotels();
            setHotels(hotels);
          } catch (error) {
              setHotelError(error.response.data.message);
          }
      };

      fetchData();
  }, [token]);

    return (
        <>
        <Screen>
        <StyledTypography variant="h4">Escolha de hotel e quarto</StyledTypography>
        {hotelError == '' ? 
            <>
            <h2>Primeiro, escolha seu hotel</h2>
            <Hotels>
                {hotels.map((h) =>
                    <Hotel 
                    id={h.id}
                    name={h.name}
                    image={h.image}
                    token={token}
                    setSelectedHotel={setSelectedHotel}
                    setDisplayRooms={setDisplayRooms}
                    />
                )}
            </Hotels>
            </>
        : 
        hotelError == 'cannotFindEnrollmenteError' ?
         <SubscriptionBoxMessage>
         <h4>Você precisa completar sua inscrição antes de prosseguir pra escolha de ingresso</h4>
       </SubscriptionBoxMessage> :
       hotelError == 'notPaidYetError' ?
       <SubscriptionBoxMessage>
         <h4>Você precisa ter confirmado pagamento antes fazer a escolha de hospedagem</h4>
       </SubscriptionBoxMessage> :
       <SubscriptionBoxMessage>
       <h4>Sua modalidade de ingresso não inclui hospedagem Prossiga para a escolha de atividades</h4>
     </SubscriptionBoxMessage> 
        }</Screen> 
        <RoomSection displayProperty={displayRooms ? 'block' : 'none'}>
                <StyledSubtitle variant='h6'>Ótima pedida! Agora escolha seu quarto:</StyledSubtitle>
                <RoomDiv>
                    {!dataRooms ? '' : dataRooms.map(item => {
                        return (
                            item.capacity === item.bookingCount ?
                                <RoomBoxFull key={item.id}>
                                    <p>{item.name}</p>
                                    <div>
                                        {[...Array(item.capacity)].map((_, i) => {
                                            return (
                                                <BsFillPersonFill key={i} color="#8C8C8C" />
                                            )
                                        }

                                        )}
                                    </div>
                                </RoomBoxFull> : (
                                    item.id === selectedRoom ?
                                        <RoomBoxSelected key={item.id} onClick={() => setSelectedRoom('')}>
                                            <p>{item.name}</p>
                                            <div>
                                                {[...Array(item.capacity)].map((_, i) => {
                                                    return (
                                                        i > item.capacity - item.bookingCount - 1 ? <BsFillPersonFill key={i} /> :
                                                            i > item.capacity - item.bookingCount - 2 ? <BsFillPersonFill key={i} color="#FF4791" /> : <BsPerson key={i} />
                                                    )
                                                }

                                                )}
                                            </div>
                                        </RoomBoxSelected> :
                                        <RoomBox key={item.id} onClick={() => setSelectedRoom(item.id)}>
                                            <p>{item.name}</p>
                                            <div>
                                                {[...Array(item.capacity)].map((_, i) => {
                                                    return (
                                                        i > item.capacity - item.bookingCount - 1 ? <BsFillPersonFill key={i} /> : <BsPerson key={i} />

                                                    )
                                                }

                                                )}
                                            </div>
                                        </RoomBox>)
                        )
                    })}
                </RoomDiv>
                <ReservateRoomButton>
                    <p>RESERVAR QUARTO</p>
                </ReservateRoomButton>
            </RoomSection>
        </>
    );
}



const Screen = styled.div`
  font-family: 'Roboto' sans-serif;

  h1{
    font-size: 34px;
    line-height: 40px;
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
      margin-left: -3px;
    }
  }
`;


const StyledSubtitle = styled.h2`
    margin-top: 37px;
    font-size: 20px;
    line-height: 23px;
    margin-bottom: 18px;
    color: #8E8E8E;

`;

const RoomBox = styled.div`
    height: 45px;
    width: 190px;
    border-radius: 10px;

    border: 1px solid #CECECE;
    padding: 16px 11px;

    display: flex;
    justify-content: space-between;

    margin: 0px 17px 8px 0px;

`

const RoomBoxFull = styled.div`
    height: 45px;
    width: 190px;
    border-radius: 10px;

    border: 1px solid #CECECE;
    padding: 16px 11px;

    display: flex;
    justify-content: space-between;

    margin: 0px 17px 8px 0px;

    background-color: #E9E9E9;
    p{
      color: #9D9D9D;
    }

`

const RoomBoxSelected = styled.div`
    height: 45px;
    width: 190px;
    border-radius: 10px;

    border: 1px solid #CECECE;
    padding: 16px 11px;

    display: flex;
    justify-content: space-between;

    margin: 0px 17px 8px 0px;

    background-color: #FFEED2;

`

const ReservateRoomButton = styled.div`
  height: 37px;
  width: 182px;
  border-radius: 4px;
  background-color: #E0E0E0;
  padding: 10px 5px;
  margin-top: 46px;

  p{
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: center;

  }

`

const RoomDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 33px;
`

const RoomSection = styled.div`
  display: ${props => props.displayProperty};
`
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

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;
