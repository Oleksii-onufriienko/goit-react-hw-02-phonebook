import { Component } from "react";
import styled from 'styled-components';

import { Formik, Form, Field } from 'formik';


const InputFieldLabel = styled.label`
    display: block;
    margin-bottom: 5px;
`;

const SubmitButton = styled.button`
      display: block;
      cursor: pointer;
      box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

const InputField = styled(Field)`
    display: block;
    margin-bottom: 15px;

`;

export class FormPhoneBook extends Component{
    initialValues = {
     name: '',
     number: ''
    }

    render() {
        return (
            <Formik initialValues={ this.initialValues} onSubmit={this.props.handleSubmit}>
            <Form autoComplete="off">
                <InputFieldLabel htmlFor="name"> Name </InputFieldLabel>
                <InputField
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
                <InputFieldLabel htmlFor="number">Number</InputFieldLabel>
                 <InputField
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
                <SubmitButton type="submit">Add contact</SubmitButton>
            </Form>    
            </Formik>
        );
    }
}