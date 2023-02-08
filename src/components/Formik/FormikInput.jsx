import Input from '../Input/Input';
import { Field, ErrorMessage } from 'formik';

//name naudojamas dvejuose vietose, o kiti propsai tik po karta
// vietoj rest gali buti props

const FormikInput = ({ name, ...rest }) => {
  return (
    <div>
      <Field name={name} as={Input} {...rest} />
      <ErrorMessage name={name} component="div"></ErrorMessage>
    </div>
  );
};

export default FormikInput;
