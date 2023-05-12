import styled from 'styled-components';

export default function TicketAndPaymentButton({ title, price, toggle, selected, plusSign }) {
  const model = {
    id: 1,
    name: 'blabla',
    price: 200,
    isRemote: true,
    includesHotel: true,
  };
  return (
    <Button selected={selected} onClick={() => toggle(price)}>
      <ButtonTitle>
        {title}
      </ButtonTitle>
      <ButtonPrice>{plusSign ? '+ ' :''}R$ {price}</ButtonPrice>
    </Button>
  );
}
const Button = styled.button`
display: flex;
flex-direction: column;
align-items: center;
height: 145px;
width: 145px;
margin-top: 17px;
margin-right: 20px;
border-radius: 20px;
border: ${(props) => (props.selected ? 'none' : '1px solid #cecece')};
background-color: ${(props) => (props.selected ? '#FFEED2' : '#ffff')};
text-align: center;
font-weight: 400;
`;

const ButtonTitle = styled.h1`
  margin-top: 53px;
  font-size: 16px;
  line-height: 19px;
  color: #454545;
`;

const ButtonPrice = styled.p`
  font-size: 14px;
  line-height: 16px;
  margin-top: 3px;
  color: #898989;
`;
