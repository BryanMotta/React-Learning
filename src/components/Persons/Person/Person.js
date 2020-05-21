import React, {Component} from 'react';
import personCss from "./Person.module.css"
import PropsTypes from 'prop-types'

class Person  extends  Component{
    render() {
        return <div className={personCss.Person}>
            <p onClick={this.props.click}> I'm a {this.props.name} and i am {this.props.age} years old ! </p>
            <p>{this.props.children}</p>
            <input type="text" onChange={this.props.changed} defaultValue={this.props.name}/>
        </div>
    }
}
Person.propTypes = {
    click: PropsTypes.func,
    name: PropsTypes.string,
    age: PropsTypes.number,
    changed: PropsTypes.func
};

export default Person;
