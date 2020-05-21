import React, {Component} from 'react';
import Person from './Person/Person';

class Persons extends Component {
    com

    static getDerivedStateFromProps(props, state){
        return state;
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        return null;
    }

    render() {
        return this.props.persons.map((person, index) => {
            return <Person name={person.name}
                           age={person.age}
                           key={person.id}
                           changed={(event) => this.props.changed(event, person.id)}
                           click={() => this.props.clicked(index)}/>
        })
    };
}

export default Persons;