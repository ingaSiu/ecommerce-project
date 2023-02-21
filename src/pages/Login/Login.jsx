import { Formik, Form } from 'formik';
import { useContext } from 'react';
import * as Yup from 'yup';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import FormikInput from '../../components/Formik/FormikInput';
import Button from '../../components/Button/Button';
import { screenSize } from '../../consts/mediaQueries';
import { CHECKOUT_PATH, REGISTER_PATH } from '../../routes/const';
import { UserContext } from '../../contexts/UserContext';
import { useLoginUser } from '../../hooks/user';
import { toast } from 'react-hot-toast';
//i skliaustelius rasom message
const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid Email').required('Required'),
  password: Yup.string().required('Required'),
});

const Login = () => {
  // issitraukiam values, galeasim gauti reiksmes, kurias irasem formoje

  const { setUser } = useContext(UserContext);
  const { mutateAsync: loginUser } = useLoginUser();
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    loginUser(values)
      .then((response) => {
        setUser(response);
        navigate(CHECKOUT_PATH);
        toast.success('Succesfully logged in');
      })
      .catch((error) => {
        console.log('Failed to log in:', error);
        toast.error('Failed to log in');
      });
  };

  return (
    //nurodome pradines reiksmes: initialValue
    // validate => validacija, kad tusti laukeliai oncloick nepraeitu kaip reiksmes
    <div>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={validationSchema}
        // validacija (dauguma atveju per Yup schema), bet sudetingesniems atvejams:
        // validate={(values) => {
        //   const errors = {};
        //   if (!values.email) {
        //     errors.email = 'Required';
        //   }
        //   if (!values.password) {
        //     errors.password = 'Required';
        //   }
        //   console.log(errors);
        //   return errors;
        // }}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <StyledForm>
            <Title>Login</Title>
            <FormikInput type="email" name="email" placeholder="Email" />
            <FormikInput type="password" name="password" placeholder="Password" />

            <Button type="submit" disabled={isSubmitting}>
              Login
            </Button>
            <StyledLink to={REGISTER_PATH}>Sign up</StyledLink>
          </StyledForm>
        )}
      </Formik>
    </div>
  );
};

export default Login;

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

export const StyledLink = styled(Link)`
  text-align: center;
  margin-top: 16px;
`;
