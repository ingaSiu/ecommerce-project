import { Formik, Form } from 'formik';
import FormikInput from '../../components/Formik/FormikInput';
import styled from 'styled-components';
import { screenSize } from '../../consts/mediaQueries';
import Button from '../../components/Button/Button';
import * as Yup from 'yup';
import { createUser } from '../../api/user';
import { useNavigate } from 'react-router-dom';
import { StyledLink } from '../Login/Login';
import { LOGIN_PATH } from '../../routes/const';

const validationSchema = Yup.object().shape({
  first_name: Yup.string().required('Required'),
  last_name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid Email').required('Required'),
  password: Yup.string().required('Required'),
  confirm_password: Yup.string()
    .required('Please retype your password.')
    .oneOf([Yup.ref('password')], 'Your passwords do not match.'),
});

const Register = () => {
  const navigate = useNavigate();
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    const { confirm_password, ...newUser } = values;
    createUser(newUser)
      .then((response) => {
        navigate(LOGIN_PATH);
      })
      .catch((error) => {
        console.error('failed to create user:', error);
      });
    console.log(values);
  };
  //text laukeliai yra default in formik todel nebuti type rasyt
  return (
    <div>
      <Formik
        initialValues={{
          first_name: '',
          last_name: '',
          email: '',
          password: '',
          confirm_password: '',
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <StyledForm>
            <Title>Register your account</Title>
            <FormikInput name="first_name" placeholder="First Name" />
            <FormikInput name="last_name" placeholder="Last Name" />
            <FormikInput type="email" name="email" placeholder="Email" />
            <FormikInput type="password" name="password" placeholder="Password" />
            <FormikInput type="password" name="confirm_password" placeholder="Repeat your password" />

            <Button type="submit" disabled={isSubmitting}>
              Submit
            </Button>
            <StyledLink to={LOGIN_PATH}>Sign in</StyledLink>
          </StyledForm>
        )}
      </Formik>
    </div>
  );
};

export default Register;

const StyledForm = styled(Form)`
  max-width: 768px;
  margin: 60px auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: ${screenSize.mobile};
`;

const Title = styled.p`
  font-size: 24px;
  text-align: center;
  margin-bottom: 16px;
`;
