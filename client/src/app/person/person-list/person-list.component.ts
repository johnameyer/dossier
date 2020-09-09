import { Component, OnInit } from '@angular/core';
import { gql, Apollo } from 'apollo-angular';
import { Subscription } from 'rxjs';

const peopleQuery = gql`
query peopleQuery {
    people {
        firstName
        lastName
    }
}
`;

@Component({
    selector: 'app-person-list',
    templateUrl: './person-list.component.html',
    styleUrls: ['./person-list.component.scss']
})
export class PersonListComponent implements OnInit {
    loading: boolean;
    people: any[];
    
    private querySubscription: Subscription;
    
    constructor(private apollo: Apollo) { }
    
    ngOnInit(): void {
        this.querySubscription = this.apollo.watchQuery<any>({
            query: peopleQuery
        })
        .valueChanges
        .subscribe(({ data, loading }) => {
            this.loading = loading;
            this.people = data.people;
        });
    }

    ngOnDestroy() {
        this.querySubscription.unsubscribe();
    }
}
