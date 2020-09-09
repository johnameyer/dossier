import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonListComponent } from './person/person-list/person-list.component';
import { PersonCreateComponent } from './person/person-create/person-create.component';
import { PersonViewComponent } from './person/person-view/person-view.component';

const routes: Routes = [{
  path: 'create', component: PersonCreateComponent
},{
  path: ':id', component: PersonViewComponent
},{
  path: '', component: PersonListComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
