import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonViewComponent } from './person-view/person-view.component';
import { PersonListComponent } from './person-list/person-list.component';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PersonCreateComponent } from './person-create/person-create.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [PersonViewComponent, PersonListComponent, PersonCreateComponent],
  imports: [
    CommonModule,
    MatListModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule
  ]
})
export class PersonModule { }
