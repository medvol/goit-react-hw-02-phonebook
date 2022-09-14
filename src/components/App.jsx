import React, { Component } from "react";
import { Box } from "./Box";
import { Form } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";

export class App extends Component {
 state = {
  contacts: [],
  filter: ''
}


  render() {
    
    return (
      <Box width="30%" mt={3} mb={3} ml={6}
        p={ 4} bg='white' borderRadius='normal'
        boxShadow='card'>
        <h1>Phonebook</h1>
        <Form/>
        <ContactList contacts={this.state.contacts}/>
      </Box>
    
    )
  }
};
