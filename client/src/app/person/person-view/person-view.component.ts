import { Component, OnInit, Input } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Subscription } from 'rxjs';
import { Person } from 'src/app/shared/person';
import { ActivatedRoute } from '@angular/router';

const personQuery = gql`
    query personQuery($id: ID!) {
        person(id: $id) {
            firstName
            lastName
        }
    }
`;

@Component({
    selector: 'app-person-view',
    templateUrl: './person-view.component.html',
    styleUrls: ['./person-view.component.scss']
})
export class PersonViewComponent implements OnInit {
    id: string;

    loading: boolean;
    person: Person;
    
    private querySubscription: Subscription;
    
    constructor(private apollo: Apollo, private route: ActivatedRoute) {
        route.paramMap.subscribe(map => this.id = map.get('id'));
    }
    
    ngOnInit(): void {
        console.log(this.id);
        this.querySubscription = this.apollo.watchQuery<{person: Person}>({
            query: personQuery,
            variables: {
                id: this.id
            }
        })
        .valueChanges
        .subscribe(({ data, loading }) => {
            this.loading = loading;
            this.person = data.person;
        });
    }

    ngOnDestroy() {
        this.querySubscription.unsubscribe();
    }
    
}
