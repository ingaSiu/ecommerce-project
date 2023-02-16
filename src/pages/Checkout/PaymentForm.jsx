import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import FormikInput from '../../components/Formik/FormikInput';
import Button from '../../components/Button/Button';
import { UserContext } from '../../contexts/UserContext';
import { lightBorderColor } from '../../consts/color';

const validationSchema = Yup.object().shape({});
const PaymentForm = () => {
  const handleSubmit = (values) => {};

  return (
    <Formik initialValues={{}} validationSchema={validationSchema} onSubmit={handleSubmit}>
      <StyledForm>
        <Subtitle>Contact Details</Subtitle>
        <FormikInput name="address" placeholder="Address" />
        <InputRow>
          <FormikInput name="address" placeholder="Address" />
          <FormikInput name="address" placeholder="Address" />
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
