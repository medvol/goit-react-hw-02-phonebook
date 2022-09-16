import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Box } from "components/Box";
import { LabelInput, FormInput, SubmitButton } from "./ContactForm.styled";

export class Form extends Component {

 static propTypes = {
    state: PropTypes.exact({        
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,                
    })
  }
    
 state = {
  name: '',
  number: '',
  }

  handleChange = event => {
    const { name, value } = event.target;    
    this.setState({ [name]: value });
  }

  handleSubmit = event => {
    event.preventDefault();   
    this.props.onSubmit(this.state);
    this.reset();
  }
  reset = () => {
    this.setState({ name: '', number: '' });
  }


  render() {
    const { name, number } = this.state;
    
      return (
        <Box border='normal' p={3} mb={5} mt={3} display='flex'
          flexDirection='column' onSubmit={this.handleSubmit} as='form'>
          <LabelInput htmlFor="name">Name</LabelInput>
            <FormInput
              type="text"
              name="name"
              value={name}              
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleChange}
          />
          <LabelInput htmlFor="number">Number</LabelInput>
            <FormInput
              type="tel"
              name="number"
              value={number}            
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.handleChange}
          />
          <SubmitButton type="submit">Add contact</SubmitButton>
        </Box>      
    
    )
  }
};


