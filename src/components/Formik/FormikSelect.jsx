import { ErrorMessage, useField } from 'formik';
import Select from 'react-select';

// useField => paima viso filed duomenis PAGAL NAME
// useFormikContext => paima visus form duomenis

const FormikSelect = ({ name, ...rest }) => {
  //useField gauname array [{...field}, {...meta} {...helpers}]

  const [field, , helpers] = useField(name);
  return (
    <div>
      <Select name={name} value={field.value} onChange={(value) => helpers.setValue(value)} {...rest} />
      {/* <Field name={name} as={Select} {...rest} /> */}
      <ErrorMessage name={name} component="div"></ErrorMessage>
    </div>
  );
};

export default FormikSelect;
