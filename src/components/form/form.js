// import React, { Component } from "react";
import { useState } from "react";
import { FormBtn, FormStyled, InputStyled, LabelStyled } from "./FormStyled";

export default function ContactForm () {

let state = []
    
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleChacge = e => {
        const { name, value } = e.currentTarget;
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'number':
                setNumber(value);
                break;
            default: return;
           } 
    }

    state = [{ name }, { number }]
    console.log(state)

 const formSubmit = (e) => {
     e.preventDefault();
     
     reset();
    }
  
    const reset = () => {
        setName('');
        setNumber('');
}
    
    
return (
  <FormStyled onSubmit={formSubmit}>
          <LabelStyled>Name
             <InputStyled
              type="text"
              name="name"
              value={name}
              onChange = {handleChacge}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          />
          </LabelStyled>

          <LabelStyled>number
            <InputStyled
                type="tel"
                name="number"
                value={number}
                onChange = {handleChacge}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
/>
          </LabelStyled>
    <FormBtn disabled={!name || !number} type='submit'>Add contact</FormBtn>
        </FormStyled>
)
}