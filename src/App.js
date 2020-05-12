import React, {Component} from 'react';
import appCss from './App.module.css';
import Person from "./Person/Person";

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
        let persons = null;
        let buttonCss = '';

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
            buttonCss= appCss.Red;
        }

        const classes = [];
        if (this.state.persons.length <= 2) {
            classes.push(appCss.red);
        }
        if (this.state.persons.length <= 1) {
            classes.push(appCss.bold);
        }
        return (
                <div className={appCss.App}>
                    <h1> Hi. I'm React App.</h1>
                    <button className={buttonCss} onClick={this.togglePersonsHandler}>Toggle Names</button>
                    <p className={classes.join(' ')}>React</p>
                    {persons}
                </div>
        );
    }


}

export default App;
