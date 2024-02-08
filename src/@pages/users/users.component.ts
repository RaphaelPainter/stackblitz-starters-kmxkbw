import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { User } from '../../@shared/interfaces/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit, OnDestroy {
  listUsers: User[] = [
    {
      id: 1,
      name: 'Rebah',
      firstname: 'Yoann',
      email: 'yrebah@webnet.fr',
      isAdmin: true,
    },
    {
      id: 2,
      name: 'Painter',
      firstname: 'Raphaël',
      email: 'rpainter@webnet.fr',
      isAdmin: false,
    },
    {
      id: 3,
      name: 'Duran',
      firstname: 'Guillaume',
      email: 'gduran@webnet.fr',
      isAdmin: false,
    },
    {
      id: 4,
      name: 'Kabe',
      firstname: 'Robnan',
      email: 'rkabe@webnet.fr',
      isAdmin: true,
    },
  ];

  constructor() {}

  ngOnInit() {}

  onClickIsAdmin(user: User): void {
    user.isAdmin = !user.isAdmin;
  }

  ngOnDestroy() {
    console.warn('Destruction du composant USERS');
  }
}
