import { useDispatch, useSelector } from 'react-redux';

import { Formik } from 'formik';
import * as Yup from 'yup';

import {
  FormWrapper,
  FormInputLabel,
  FormSubmitBtn,
  StyledForm,
  StyledField,
  StyledErrorMessage,
} from './ContactForm.styled';

import { toastifyMessage } from 'service';
import { contactsSelectors, contactsOperations } from '../redux/contacts';

const addContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(70, 'Too Long!')
    .required('A name is required'),
  number: Yup.number('Please, enter a number')
    .integer("A phone number can't include a decimal point")
    .positive("A phone number can't start with a minus")
    .required('A phone number is required'),
});

export default function ContactForm() {
  const contacts = useSelector(contactsSelectors.selectContacts);
  const isLoading = useSelector(contactsSelectors.selectIsLoading);
  const dispatch = useDispatch();

  const handleFormSubmit = (newContact, { resetForm }) => {
    const { name } = newContact;

    if (
      contacts.length !== 0 &&
      contacts.find(
        contact =>
          contact.name.toLowerCase().trim() === name.toLowerCase().trim()
      )
    ) {
      toastifyMessage.toastWarn(`${name} is already in contacts`);

      return;
    }

    dispatch(contactsOperations.fetchAddContacts(newContact));
    resetForm();
  };

  return (
    <>
      <FormWrapper>
        <Formik
          initialValues={{ name: '', number: '' }}
          validationSchema={addContactSchema}
          onSubmit={handleFormSubmit}
        >
          <StyledForm>
            <FormInputLabel>
              Name
              <StyledField name="name" type="text" placeholder="John Wick" />
              <StyledErrorMessage component="div" name="name" />
            </FormInputLabel>
            <FormInputLabel>
              Phone number
              <StyledField
                name="number"
                type="tel"
                placeholder="+380501234567"
              />
              <StyledErrorMessage component="div" name="number" />
            </FormInputLabel>
            <FormSubmitBtn type="submit" disabled={isLoading}>
              Add contact
            </FormSubmitBtn>
          </StyledForm>
        </Formik>
      </FormWrapper>
    </>
  );
}
