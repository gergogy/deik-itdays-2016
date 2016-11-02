import {Router, RouterModule, Data} from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailsComponent } from './components/user-list/user-details/user-details.component';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const AppRouting = RouterModule.forRoot([
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'data-binding',
    component: DataBindingComponent
  },
  {
    path: 'users',
    component: UserListComponent
  },
  {
    path: 'users/:id',
    component: UserDetailsComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
]);
