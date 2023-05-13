/* eslint-disable */
import styled from 'styled-components';
import { BsPerson, BsFillPersonFill } from 'react-icons/bs';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import * as hotelApi from '../../../services/hotelApi';
import useToken from '../../../hooks/useToken';


export default function Hotel() {
  const [data, setData] = React.useState(null);
  const [displayRooms, setDisplayRooms] = React.useState(true)
  const [selectedRoom, setSelectedRoom] = React.useState('')
  const [selectedHotel, setSelectedHotel] = React.useState(2)
  
  const token = useToken();

  const getHotelRequest = async (token) => {
    
    const response = await hotelApi.performGetHotel(token, selectedHotel);
    return response;
  };

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getHotelRequest(token);
        setData(result.Rooms);
      } catch (error) {
        console.log('error')
        console.error(error)
      }
    };

    fetchData();
  }, [token]);

  return (
    <>
      <StyledTypography variant='h4' onClick={()=>setDisplayRooms(true)}>Escolha de hotel e quarto</StyledTypography>
      <RoomSection displayProperty={displayRooms?'block':'none'}> 
        <StyledSubtitle variant='h6'>Ótima pedida! Agora escolha seu quarto:</StyledSubtitle>
        <RoomDiv>
          {!data?'':data.map(item => {
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

const StyledTypography = styled(Typography)`
  margin-bottom: 20px!important;
`;

const StyledSubtitle = styled(Typography)`
margin-top: 37px!important;
size: 20px!important;
color: #8E8E8E !important;
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
