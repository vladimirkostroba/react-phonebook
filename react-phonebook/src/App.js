import { Fragment, useEffect, useState } from "react";
import { nanoid } from 'nanoid'

import Form from "./Components/Form/Form";
import ContactList from "./Components/ContactList/ContactList";
import Filter from "./Components/Filter/Filter";
import Layout from "./Components/Layout/Layout";

export default function App(){
   const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) ?? [];});

    const [filter, setFilter] = useState('');
   

   const handleAddContact =(name,number)=> {

        if(!name || !number ){
            alert('Complete the form')
            return
        }
        const contact = {
            name:name,
            number:number,
            id:nanoid(),
        }

        if(findExsistingContact(contact)){
            alert('Contact already exists');
            return;
        }

        setContacts(state => [...state,contact])
   }

//    Проверка существующего контакта

 const findExsistingContact = ({name}) => {

    return(contacts.some(contact => 
      contact.name.includes(name.toLowerCase())))
  }

//    Добавление в locaStorage

useEffect(() => {
    window.localStorage.setItem('contacts',JSON.stringify(contacts));
},[contacts]);

// Filter

const getWisibleContacts =()=>{
    return contacts.filter(contact => 
        contact.name.toLowerCase().includes(filter.toLowerCase())
    )

}

// Remove

const removeContact = id => {
    setContacts(contacts => {
        return contacts.filter(contact => contact.id !== id)  
    })
}



const wisibleContacts = getWisibleContacts();


   return(
    <Fragment>
    <header>
        <Layout>
            <Form onAddContact={handleAddContact}/>
        </Layout>
    </header>

    <Layout>
        {contacts.length > 1 && <Filter value={filter} onChange={setFilter}/>}
        {contacts.length > 0 && 
        <ContactList contacts={wisibleContacts} onRemove={removeContact}/>}
    </Layout>
    </Fragment>
    
    
   
   )
}