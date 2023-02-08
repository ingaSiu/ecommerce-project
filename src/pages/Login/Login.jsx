import { Formik, Form, Field, ErrorMessage } from 'formik';

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
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Required';
          }
          if (!values.password) {
            errors.password = 'Required';
          }
          console.log(errors);
          return errors;
        }}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="div"></ErrorMessage>
            </div>

            <div>
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="div"></ErrorMessage>
            </div>

            <button type="submit" disabled={isSubmitting}>
              Login
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
