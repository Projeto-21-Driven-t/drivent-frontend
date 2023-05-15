import styled from 'styled-components';
import { AiFillCreditCard } from 'react-icons/ai';

export default function CreditCard() {
  return (
    <StyledCreditCard>
      <AiFillCreditCard style={iconStyle} />
      <TextWrapper>
        <StyledCardNumber>•••• •••• •••• ••••</StyledCardNumber>
        <InfoWrapper>
          <Text>YOUR NAME HERE</Text>
          <BotInfoWrapper>
            <Text size="0.5em">valid thru</Text>
            <Text size="0.9em">••/••</Text>
          </BotInfoWrapper>
        </InfoWrapper>
      </TextWrapper>
    </StyledCreditCard>
  );
}

const StyledCreditCard = styled.div`
  position: relative;
  height: 10.5em;
  width: 295px;
  min-width: 267px;
  background-color: gray;
  border-radius: 20px;
  padding: 30px 20px 30px 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const InfoWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 0px 20px;
  align-items: flex-end;
  justify-content: space-between;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const BotInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Text = styled.div`
  font-family: 'Roboto';
  font-size: ${(props) => props.size || '0.9em'};
  font-weight: ${(props) => props.weigth || 300};
  color: lightgrey;
`;

const StyledCardNumber = styled.div`
  margin-bottom: 20px;
  font-family: 'Kredit', 'sans-serif', 'Roboto';
  font-size: 2.3em;
  color: white;
`;

const iconStyle = {
  position: 'absolute',
  color: 'gold',
  top: '35px',
  left: '35px',
  height: '30px',
  width: '30px',
};
