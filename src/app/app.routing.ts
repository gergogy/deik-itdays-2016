import { Router, RouterModule } from '@angular/router';

import { UserListComponent } from './components/user-list/user-list.component';

export const AppRouting = RouterModule.forRoot([
  {
    path: '',
    component: UserListComponent
  },
  {
    path: 'home',
    component: UserListComponent
  },
  {
    path: 'users',
    component: UserListComponent
  },
  {
    path: '**',
    component: UserListComponent
  }
]);
