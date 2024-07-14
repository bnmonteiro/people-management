import { Routes } from '@angular/router';
import { PeopleListComponent } from './people-list/people-list.component';
import { PeopleAddComponent } from './people-add/people-add.component';
import { PeopleEditComponent } from './people-edit/people-edit.component';

export const appRoutes: Routes = [
  { path: '', component: PeopleListComponent },
  { path: 'add', component: PeopleAddComponent },
  { path: 'edit/:id', component: PeopleEditComponent }
];
