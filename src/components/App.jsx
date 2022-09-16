import React, { Component } from "react";
import { nanoid } from 'nanoid'
import { Box } from "./Box";
import { Form } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";


export class App extends Component {
 state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: ''
  }
  addContact = (template) => {
    const { contacts } = this.state;
    const duplicateContact =
      contacts.find(contact => contact.name.toLowerCase() === template.name.toLowerCase()) 
     
   
    if(duplicateContact) return window.alert(`${template.name} is already in contacts`)
    
   
    const contact = {
      ...template,
      id: nanoid(),
    }
    this.setState(({ contacts }) => ({
      
       contacts:[contact, ...contacts]
    }))
    
    
  }

  changeFilter = (event) => {
     const { value } = event.target;    
    this.setState({filter: value})
  }

  getVisibleContact = () => {
    const { contacts, filter } = this.state;
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(contact=> contact.name.toLowerCase().includes(normalizeFilter))
  }

  deleteContacts = (contactId) => {
    this.setState(prevState => (
      {
        contacts: prevState.contacts
          .filter(contact => contact.id !== contactId)
      }
      
    ))
  }


  render() {
    const {filter } = this.state;
    const visibleContact = this.getVisibleContact();
    
    return (
      <Box width="30%" mt={3} mb={3} ml={6}
        p={ 4} bg='white' borderRadius='normal'
        boxShadow='card'>
        <h1>Phonebook</h1>
        <Form onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter}/>
        <ContactList contacts={visibleContact} onDeleteContact={this.deleteContacts } />
      </Box>
    
    )
  }
};
