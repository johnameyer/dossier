import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { PersonInput } from 'src/app/shared/person';

const createPerson = gql`
	mutation createPerson($person: PersonInput!) {
		createPerson(person: $person) {
			id
		}
	}
`;

@Component({
	selector: 'app-person-create',
	templateUrl: './person-create.component.html',
	styleUrls: ['./person-create.component.scss']
})
export class PersonCreateComponent implements OnInit {
	
	@ViewChild('firstName')
	firstName: ElementRef<HTMLInputElement>;

	@ViewChild('lastName')
	lastName: ElementRef<HTMLInputElement>;
	
	constructor(private apollo: Apollo) { }
	
	ngOnInit(): void {
	}
	
	create(e: Event) {
		const person: PersonInput = {
			firstName: this.firstName.nativeElement.value,
			lastName: this.lastName.nativeElement.value
		};
		this.apollo.mutate({
			mutation: createPerson,
			variables: {
				person
			}
		}).subscribe(console.log);
		e.preventDefault();
	}
	
}
