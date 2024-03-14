import React from "react";

export default function Filter({value,onChange}){
    return(
        <div className="Filter">
            <input
            name='filter'
            value={value}
            onChange={e => onChange(e.target.value)}
            />
        </div>
    )
}