import { toast } from 'react-toastify';
import { useForm } from '../../hooks/useForm.js';
import Input from '../Form/Input.js';
import TicketAndPaymentButton from './TicketAndPaymentButton.js';
import { StyledSubtitle, ButtonReserve } from './checkin.js';
import styled from 'styled-components';
import FormValidations from './FormValidations.js';
import usePayment from '../../hooks/api/usePayment.js';
import useToken from '../../hooks/useToken.js';
import { creditCardType } from './helpers.js';

export default function Checkout({ ticket }) {
  const { postPayment } = usePayment();
  const { handleSubmit, handleChange, data, errors, setData, customHandleChange } = useForm({
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
        toast('Pagamento efetuado com sucesso!');
      } catch (err) {
        console.log(err);
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
    <>
      <StyledSubtitle>Ingresso escolhido</StyledSubtitle>
      <TicketAndPaymentButton
        title={ticket.TicketType?.name || 'nome'}
        price={ticket.TicketType?.price || '1000'}
        toggle={() => {}}
        selected={true}
        plusSign={false}
        disabled={true}
        width={'290px'}
        height={'108px'}
      />
      <StyledSubtitle>Pagamento</StyledSubtitle>
      <Form onSubmit={handleSubmit}>
        <FirstWrapper>
          <CreditCard></CreditCard>
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
            </InputWrapper>
            <InputWrapper>
              <Input
                name={'name'}
                placeholder={'Name'}
                type="text"
                value={data?.name?.toUpperCase() || ''}
                onChange={handleChange('name')}
              />
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
              </PropsWrapper>
            </LastWrapper>
          </MiddleWrapper>
        </FirstWrapper>

        <ButtonReserve>FINALIZAR PAGAMENTO</ButtonReserve>
      </Form>
    </>
  );
}

const Form = styled.form`
  display: block;
`;

const CreditCard = styled.div`
  height: 10.5em;
  width: 295px;
  background-color: gray;
  border-radius: 20px;
`;

const MiddleWrapper = styled.div`
  height: fit-content;
  width: 350px;
  .MuiInputBase-input {
    height: 0.9em;
  }
`;

const InputWrapper = styled.div`
  display: flex;
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
`;

const LastWrapper = styled.div`
  display: flex;
  gap: 0px 20px;
`;

const PropsWrapper = styled.div`
  width: ${(props) => props?.width || '100%'};
`;
