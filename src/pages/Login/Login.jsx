import { Formik, Form } from 'formik';
import FormikInput from '../../components/Formik/FormikInput';
import styled from 'styled-components';
import { screenSize } from '../../consts/mediaQueries';
import Button from '../../components/Button/Button';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { REGISTER } from '../../routes/const';

//i skliaustelius rasom message
const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid Email').required('Required'),
  password: Yup.string().required('Required'),
});

const Login = () => {
  // issitraukiam values, galeasim gauti reiksmes, kurias irasem formoje
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
      resetForm();
    }, 2000);
    console.log(values);
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
            <StyledLink to={REGISTER}>Sign up</StyledLink>
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