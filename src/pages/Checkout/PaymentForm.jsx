import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import { useContext } from 'react';
import FormikInput from '../../components/Formik/FormikInput';
import Button from '../../components/Button/Button';
import { lightBorderColor } from '../../consts/color';
import { requiredField } from '../../consts/validations';
import FormikSelect from '../../components/Formik/FormikSelect';
import { CartContext } from '../../contexts/CartContext';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { HOME_PATH } from '../../routes/const';

const validationSchema = Yup.object().shape({
  country: Yup.object().required(requiredField),
  address: Yup.string().required(requiredField),
  postal_code: Yup.string().required(requiredField),
  city: Yup.string().required(requiredField),
  phone_number: Yup.string().required(requiredField),
  first_name: Yup.string().required(requiredField),
  last_name: Yup.string().required(requiredField),
  card_number: Yup.number().required(requiredField),
  card_cvv: Yup.number().required(requiredField),
});

const PaymentForm = () => {
  const { resetCart } = useContext(CartContext);
  const navigate = useNavigate();
  const handleSubmit = (values) => {
    resetCart();
    navigate(HOME_PATH);
    toast.success('Confirmed purchases');
    console.log(values);
  };

  return (
    <Formik
      initialValues={{
        country: '',
        address: '',
        postal_code: '',
        city: '',

        phone_number: '',
        first_name: '',
        last_name: '',
        card_number: '',
        card_cvv: '',
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <StyledForm>
        <Subtitle>Contact Details</Subtitle>
        <FormikSelect name="country" options={[{ label: 'Lithuania', value: 'LT' }]} />
        <FormikInput name="address" placeholder="Address" />
        <InputRow>
          <InputRowItem>
            <FormikInput name="postal_code" placeholder="Postal Code" />
          </InputRowItem>
          <InputRowItem>
            <FormikInput name="city" placeholder="City" />
          </InputRowItem>
        </InputRow>

        <FormikInput name="phone_number" placeholder="Phone Number" />

        <Subtitle>Card Details</Subtitle>
        <InputRow>
          <InputRowItem>
            <FormikInput name="first_name" placeholder="First name" />
          </InputRowItem>
          <InputRowItem>
            <FormikInput name="last_name" placeholder="Last name" />
          </InputRowItem>
        </InputRow>
        <InputRow>
          <CardNumber>
            <FormikInput type="number" name="card_number" placeholder="Card number" />
          </CardNumber>
          <InputRowItem>
            <FormikInput type="number" name="card_cvv" placeholder="CVV" />
          </InputRowItem>
        </InputRow>
        <Button type="submit">Confirm purchases</Button>
      </StyledForm>
    </Formik>
  );
};

export default PaymentForm;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Subtitle = styled.p`
  font-size: 18px;
  padding-bottom: 8px;
  border-bottom: 1px solid ${lightBorderColor};
`;
const InputRow = styled.div`
  display: flex;
  gap: 16px;
`;

const InputRowItem = styled.div`
  flex: 1;
`;
const CardNumber = styled.div`
  flex: 3;
`;
