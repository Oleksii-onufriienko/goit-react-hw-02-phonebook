import React from "react";
import { Component } from "react";
import { nanoid } from 'nanoid'

import { FormPhoneBook } from "./FormPhoneBook/FormPhoneBook";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";

const KEY_PHONE_BOOK = "phone_book";

export class App extends Component {
    state = {
      contacts: [
          {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
          {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
          {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
          {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
     ],
     filter: '',
    }
  
  componentDidMount() {
    const phoneBook = localStorage.getItem(KEY_PHONE_BOOK);
    if (phoneBook) {
      this.setState({...JSON.parse(phoneBook), filter: '' });
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.contacts.length !== this.state.contacts.length) {
      localStorage.setItem(KEY_PHONE_BOOK,JSON.stringify(this.state));
    }
  }
  
  handleSubmit = (value, {resetForm}) => {
    const { name, number } = value;
     const contact = {
         id: nanoid(),
        name,
        number,
     };

    if (this.isContact(name)) {
      alert(`${name} is alredy in contact.`);
      return;
    }
    this.setState(({contacts}) => ({contacts: [contact,...contacts]}));
    resetForm();
  }
  
  isContact = (name) => {
    const {contacts} = this.state;
    const normalizeName = name.toLowerCase();

    return contacts.find(contact => contact.name.toLowerCase() === normalizeName);
  }

  onChangeFilter = (e) => {
    this.setState({filter: e.currentTarget.value});
  }

  getVisibleContacts = () => {
    const {contacts, filter} = this.state;
    const normalizeFilter = filter.toLowerCase();

    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizeFilter));
  }

  deleteContact = (index) => { 
    const newContacts = [...this.state.contacts];
    newContacts.splice(index, 1);
    this.setState( {contacts: newContacts});
  }

  render() {
    return (
    <div>
      <h2>Phonebook</h2>
        <FormPhoneBook handleSubmit={this.handleSubmit} />
          <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.onChangeFilter}/>
        <ContactList listData={this.getVisibleContacts()} deleteContact={this.deleteContact} />
    </div>
    );

}
}
