import { Router, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const AppRouting = RouterModule.forRoot([
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'users',
    component: UserListComponent
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
