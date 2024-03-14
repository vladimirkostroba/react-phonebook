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
    <form onSubmit={e => onSubmit(e)}>
    <input
    value={name}
    onChange={e => setName(e.target.value)}
    type="text"
    name="name"
     />

     <br></br>

    <input
    value={number}
    onChange={e => setNumber(e.target.value)}
    type="number"
    name="number"
     />

     <br></br>

     <button type="submit">click me</button>
    </form>
    )
}