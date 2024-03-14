import React from "react";

export default function ContactList({contacts,onRemove}){
    return(
        <ul>
            {contacts.map(({name,number,id}) =>(
                <li key={id}>
                    <p>Name: {name}</p>
                    <p>Number: {number}</p>
                    <button type="button" onClick={() => onRemove(id)}>delete</button>
                </li>
            ))}
        </ul>
    )
}