import React from 'react';
import personCss from "./Person.module.css"

const person = (props) => {
    return (
        <div className={personCss.Person}>
            <p onClick={props.click}> I'm a {props.name} and i am {props.age} years old ! </p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} defaultValue={props.name}/>
        </div>
    )
};

export default person;
