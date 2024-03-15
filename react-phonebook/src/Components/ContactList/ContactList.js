import React from "react";

export default function ContactList({contacts,onRemove}){
    return(
        <ul className="Contacts">
            {contacts.map(({name,number,id}) =>(
                <li className="Contact" key={id}>
                    <p><b>Name:</b><br/>{name}</p>
                    <p><b>Number:</b><br/>{number}</p>
                    <button type="button" onClick={() => onRemove(id)}>delete</button>
                </li>
            ))}
        </ul>
    )
}