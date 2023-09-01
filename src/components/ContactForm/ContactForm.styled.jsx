import styled from '@emotion/styled';
import { Field, Form, ErrorMessage } from 'formik';

const FormWrapper = styled.div`
  margin-bottom: 40px;
`;

const FormInputLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin: 20px 20px 0px 20px;
  font-size: 24px;
`;

const FormSubmitBtn = styled.button`
  display: inline-block;
  width: 160px;
  height: 50px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 18px;
  text-transform: uppercase;
  border: 0px;
  border-radius: 20px;
  background-color: #3498db;
  color: white;
  box-shadow: none;
  transition: all 250ms ease-in-out;

  :hover,
  :focus {
    background-color: #39b0ff;
    box-shadow: 0px 4px 4px #00000026, inset 0px 0px 0px 0px #0000004d;
  }
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 350px;

  border: 1px solid darkgray;
  border-radius: 5px;
  background-color: white;
  box-shadow: 0px 2px 10px -3px;
`;

const StyledField = styled(Field)`
  width: 300px;
  margin-top: 4px;
  padding: 4px;
  font-size: 16px;
  border: 2px solid #3498db;
  border-radius: 5px;
  background-color: ghostwhite;
`;

const StyledErrorMessage = styled(ErrorMessage)`
  margin-top: 10px;

  font-size: 14px;
  font-weight: 600;

  color: red;
`;

export {
  FormWrapper,
  FormInputLabel,
  FormSubmitBtn,
  StyledForm,
  StyledField,
  StyledErrorMessage,
};
