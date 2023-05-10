import styled from 'styled-components';

export default function TicketAndPaymentButton({ title, price, toggle, selected }) {
  const model = {
    id: 1,
    name: 'blabla',
    price: 200,
    isRemote: true,
    includesHotel: true
  };
  return (
    <Button selected={selected} onClick={() => toggle(price)}>
      <ButtonTitle>
        {title}
      </ButtonTitle>
      <ButtonPrice>{price}</ButtonPrice>
    </Button>
  );
}
const Button = styled.button`
height: 145px;
width: 145px;
margin-top: 17px;
border-radius: 20px;
border: 1px solid #cecece;
background-color: ${(props) => (props.selected ? '#FFEED2' : 'none')};
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
