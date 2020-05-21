import React from 'react';
import cockpitCss from './Cockpit.module.css';

const cockpit = (props) => {
    let buttonCss = '';
    if(props.showPersons){
        buttonCss= cockpitCss.Red;
    }

    const classes = [];
    if (props.persons.length <= 2) {
        classes.push(cockpitCss.red);
    }
    if (props.persons.length <= 1) {
        classes.push(cockpitCss.bold);
    }

    return (
        <div className={cockpitCss.Cockpit}>
            <h1> Hi. I'm React App.</h1>
            <button className={buttonCss}
                    onClick={props.clicked}>
                Toggle Names
            </button>
            <p className={classes.join(' ')}>React</p>
        </div>
    );
}
export default cockpit;