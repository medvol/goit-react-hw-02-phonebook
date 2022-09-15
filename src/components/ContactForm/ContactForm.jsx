import React, { Component } from "react";
import PropTypes from 'prop-types';

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
    this.setState({[name]: value})
  }

  handleSubmit = event => {
    event.preventDefault();   
    this.props.onSubmit(this.state);
    this.reset();
  }
  reset = () => {
    this.setState({ name:'', number:'' })
  }


  render() {
    const{name, number}= this.state
    
      return (
          <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name</label>
            <input
              type="text"
            name="name"
            value={name}
            
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleChange}
          />
          <label htmlFor="number">Number</label>
            <input
                type="tel"
            name="number"
            value={number}
            
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleChange}
          />
          <button type="submit">Add contact</button>
        </form>      
    
    )
  }
};
