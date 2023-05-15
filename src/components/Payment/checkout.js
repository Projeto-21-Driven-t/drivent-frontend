import { toast } from 'react-toastify';
import { useForm } from '../../hooks/useForm.js';
import Input from '../Form/Input.js';
import TicketAndPaymentButton from './TicketAndPaymentButton.js';
import { ButtonReserve } from './checkin.js';
import styled from 'styled-components';
import FormValidations from './FormValidations.js';
import usePayment from '../../hooks/api/usePayment.js';
import { creditCardType } from './helpers.js';
import { ErrorMsg } from '../PersonalInformationForm/ErrorMsg.js';
import { AiFillCheckCircle } from 'react-icons/ai';
import CreditCard from './CreditCard.js';
import { Typography } from '@material-ui/core';

export default function Checkout({ ticket }) {
  const { postPayment } = usePayment();
  const { handleSubmit, handleChange, data, errors } = useForm({
    validations: FormValidations,

    onSubmit: async(data) => {
      const paymentData = {
        ticketId: ticket.id,
        cardData: {
          issuer: creditCardType(data.cardNumber),
          number: data.cardNumber.replaceAll('.', '').replaceAll('-', ''),
          name: data.name,
          expirationDate: data.validThru,
          cvv: data.cvc,
        },
      };

      try {
        await postPayment(paymentData);
        window.location.reload(false);
        toast('Pagamento efetuado com sucesso!');
      } catch (err) {
        toast.error('Verifique suas informações de pagamento!');
      }
    },

    initialValues: {
      cardNumber: '',
      name: '',
      validThru: '',
      cvc: '',
    },
  });
  return (
    <Container>
      <StyledSubtitle>Ingresso escolhido</StyledSubtitle>
      <TicketAndPaymentButton
        title={ticket.TicketType?.name || 'nome'}
        price={ticket.TicketType?.price || '1000'}
        toggle={() => {}}
        selected={true}
        plusSign={false}
        disabled
        width={'290px'}
        height={'108px'}
      />
      <StyledSubtitle>Pagamento</StyledSubtitle>
      {ticket.status === 'PAID' ? (
        <>
          <PaymentWrapper>
            <AiFillCheckCircle style={iconStyle} />
            <TextWrapper>
              <Text weigth="700">Pagament confirmado!</Text>
              <Text>Prossiga para a escolha de hospedagem e atividades</Text>
            </TextWrapper>
          </PaymentWrapper>
        </>
      ) : (
        <Form onSubmit={handleSubmit}>
          <FirstWrapper>
            <CreditCard />
            <MiddleWrapper>
              <InputWrapper>
                <Input
                  name={'cardNumber'}
                  placeholder={'Card Number'}
                  mask="9999 9999 9999 9999"
                  type="text"
                  value={data?.cardNumber || ''}
                  onChange={handleChange('cardNumber')}
                  maxLength={18}
                />
                <CardExampleText>E.g.:49..., 51..., 36..., 37...</CardExampleText>
                {errors.cardNumber && <ErrorMsg>{errors.cardNumber}</ErrorMsg>}
              </InputWrapper>
              <InputWrapper>
                <Input
                  name={'name'}
                  placeholder={'Name'}
                  type="text"
                  value={data?.name?.toUpperCase() || ''}
                  onChange={handleChange('name')}
                />
                {errors.name && <ErrorMsg>{errors.name}</ErrorMsg>}
              </InputWrapper>
              <LastWrapper>
                <PropsWrapper width="60%">
                  <Input
                    name={'validThru'}
                    placeholder={'Valid Thru'}
                    mask="99/99"
                    type="text"
                    value={data?.validThru || ''}
                    onChange={handleChange('validThru')}
                  />
                  {errors.validThru && <ErrorMsg>{errors.validThru}</ErrorMsg>}
                </PropsWrapper>
                <PropsWrapper width="36%">
                  <Input
                    name={'cvc'}
                    placeholder={'CVC'}
                    mask="999"
                    type="text"
                    value={data?.cvc || ''}
                    onChange={handleChange('cvc')}
                  />
                  {errors.cvc && <ErrorMsg>{errors.cvc}</ErrorMsg>}
                </PropsWrapper>
              </LastWrapper>
            </MiddleWrapper>
          </FirstWrapper>

          <ButtonReserve>FINALIZAR PAGAMENTO</ButtonReserve>
        </Form>
      )}
    </Container>
  );
}

const Container = styled.div`
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    > div {
      width: 100%;
      padding-left: 0px !important;
    }
  }
`;

const StyledSubtitle = styled(Typography)`
  margin-top: 37px !important;
  size: 20px !important;
  color: #8e8e8e !important;
  span {
    font-weight: 900;
  }
  @media (max-width: 600px) {
    width: 100%;
    text-align: initial;
  }
`;

const Form = styled.form`
  display: block;
  @media (max-width: 600px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const MiddleWrapper = styled.div`
  height: fit-content;
  width: 350px;
  .MuiInputBase-input {
    height: 0.9em;
  }
`;

const InputWrapper = styled.div`
  display: block;
  justify-content: space-between;
  > div {
    width: 100%;
  }
`;

const FirstWrapper = styled.div`
  height: fit-content;
  display: flex;
  align-items: center;
  gap: 0px 30px;
  margin: 5px 0px 30px 0px;
  @media (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
    gap: 30px 0px;
    margin-top: 20px;
  }
`;

const LastWrapper = styled.div`
  display: flex;
  gap: 0px 20px;
`;

const PaymentWrapper = styled.div`
  display: flex;
  gap: 0px 10px;
  margin-top: 10px;
`;

const PropsWrapper = styled.div`
  width: ${(props) => props?.width || '100%'};
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Text = styled.div`
  font-family: 'Roboto';
  font-size: 0.9em;
  font-weight: ${(props) => props.weigth || 300};
`;

const CardExampleText = styled.div`
  font-family: 'Roboto';
  font-size: 1em;
  font-weight: ${(props) => props.weigth || 300};
  color: ${(props) => props.color || 'grey'};
  margin: 3px;
`;

const iconStyle = {
  color: 'lime',
  width: '42px',
  height: '42px',
};
