import { useState } from "react";

export default function Form({onAddContact}){
    
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const onSubmit = e => {
        e.preventDefault();

        onAddContact(name,number)

        setName('');
        setNumber('');
    }

    return(
    <form 
    className="Form"
    onSubmit={e => onSubmit(e)}>
    <input
    value={name}
    placeholder="Enter name"
    onChange={e => setName(e.target.value)}
    type="text"
    name="name"
     />

     <br></br>

    <input
    value={number}
    placeholder="Enter phone number"
    onChange={e => setNumber(e.target.value)}
    type="number"
    name="number"
     />

     <br></br>

     <button type="submit">Save number</button>
    </form>
    )
}