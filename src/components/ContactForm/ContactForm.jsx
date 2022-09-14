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


  render() {
    
      return (
          <form>
            <label htmlFor="">Name</label>                  
            <input
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
            />              
        </form>      
    
    )
  }
};
