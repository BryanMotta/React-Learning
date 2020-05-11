import React, {Component} from 'react';
import './App.css';
import Person from "./Person/Person";
import styled from 'styled-components';

const StyledButton = styled.button`
    background-color: ${props=> props.alt ? 'red' : 'green'};
    color: white;
    font: inherit;
    border: 1px solid blue;
    padding: 8px;
    cursor: pointer;
    &:hover {
        background-color: ${props=> props.alt ? 'salmon' : 'lightgreen'};
        color: black;
    }
`;

class App extends Component {
    state = {
        persons: [
            {id: 'asdfsasdfasd', name: "Bryan", age: 25},
            {id: 'asdfsasdfasdfr', name: "Veronica", age: 27},
            {id: 'asdfsasdfr324', name: "Titi", age: 10}
        ],
        showPersons: false
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
        const style = {
            backgroundColor: 'green',
            color: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer',
            ':hover': {
                backgroundColor: 'lightgreen',
                color: 'black'
            }
        }

        let persons = null;
        if (this.state.showPersons) {
            persons = (
                <div>{
                    this.state.persons.map((person, index) => {
                        return <Person name={person.name} age={person.age} key={person.id}
                                       changed={(event) => this.nameChangeHandler(event, person.id)}
                                       click={this.deletePersonHandler.bind(this, index)}/>
                    })
                }
                </div>
            );
            style.backgroundColor = 'red';
            style[':hover'] = {
                backgroundColor: 'salmon',
                color: 'black'
            }
        }

        let classes = [];
        if (this.state.persons.length <= 2) {
            classes.push('red');
        }
        if (this.state.persons.length <= 1) {
            classes.push('bold');
        }
        return (
                <div className="App">
                    <h1> Hi. I'm React App.</h1>
                    <StyledButton alt={this.state.showPersons} onClick={this.togglePersonsHandler}>Toggle Names</StyledButton>
                    <p className={classes.join(' ')}>React</p>
                    {persons}
                </div>
        );
    }


}

export default App;
