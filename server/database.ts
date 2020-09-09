import { Person, PersonInput } from "../shared/person";

const nextValue = function(){
    let count = 0;
    return () => count++ + '';
}();

const people: Person[] = [{
    id: nextValue(),
    firstName: 'Jerry',
    lastName: 'Seinfeld'
}];

export namespace Database {
    export function getPeople() {
        return people;
    }

    export function getPerson(id: string) {
        return people.find(person => person.id === id);
    }

    export function createPerson(person: PersonInput) {
        const newPerson = {...person, id: nextValue()};
        people.push(newPerson);
        return newPerson;
    }

    export function updatePerson(id: string, person: PersonInput) {
        const oldPerson = people.find(person => person.id === id);
        Object.assign(oldPerson, person);
        return oldPerson;
    }
}