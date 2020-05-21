import React, {Component} from 'react';

import appCss from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit'

class App extends Component {
    constructor(props,) {
        super(props);
        console.log('[App.js] constructor')
    }

    state = {
        persons: [
            {id: 'asdfsasdfasd', name: "Bryan", age: 25},
            {id: 'asdfsasdfasdfr', name: "Verônica", age: 27},
            {id: 'asdfsasdfr324', name: "Titi", age: 10}
        ],
        showPersons: false
    }

    static getDerivedStateFromProps(props, state){
        console.log('[App.js] getDerivedStateFromProps')
        return state;
    }

    componentDidMount() {

    }

    nameChangeHandler = (event, personId) => {
        const personIndex = this.state.persons.findIndex(person => {
            return person.id === personId;
        })
        const person = {
            ...this.state.persons[personIndex]
        };
        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;
        this.setState({
            persons: persons
        })
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow})
    }

    deletePersonHandler = (personIndex) => {
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons})

    }

    render() {
        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <Persons persons={this.state.persons}
                         clicked={this.deletePersonHandler}
                         changed={this.nameChangeHandler}/>
            );

        }

        return (
            <div className={appCss.App}>
                <Cockpit showPersons={this.state.showPersons}
                         persons={this.state.persons}
                         clicked={this.togglePersonsHandler}/>
                {persons}
            </div>
        );
    }

}

export default App;
