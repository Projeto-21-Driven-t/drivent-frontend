import styled from 'styled-components';

export default function Hotel(props) {
  const { id, name, image, vacancies, accommodationType, selectedHotel, setSelectedHotel, setDisplayRooms, setSelectedRoom, selectedRoom } = props;

  function hotelClick(hotelId) {
    setSelectedHotel(hotelId);
    setSelectedRoom('');
    setDisplayRooms(true);
  }

  return (
    <HotelStyled 
      onClick={() => hotelClick(id)}
      selectedHotel={selectedHotel}
      id={id}
    >
      <img src={image} alt='Hotel img' />
      <h3>{name}</h3>
      {
        selectedHotel == id &&
          vacancies > 0 &&
            <>
              <h4>Tipos de acomodação:</h4>
              <p>{accommodationType}</p>
              <h4>Vagas disponíveis:</h4>
              <p>{vacancies}</p>
            </> 
      }
    </HotelStyled>
  );
}

const HotelStyled = styled.div`
  width: 196px;
  height: 264px;
  padding: 16px 14px;
  margin-bottom: 15px;
  background-color: ${(props) => props.selectedHotel == props.id ? '#FFEED2' : '#EBEBEB'};
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
