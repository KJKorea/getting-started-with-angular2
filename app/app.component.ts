import { Component } from '@angular/core';
import { User } from './shared/model/user';

@Component({
  selector: 'my-app',
  template: `
    <header>
      <nav class="navbar navbar-inverse">
        <div class="navbar-header">
          <a href="/" class="navbar-brand">My Angular 2 App!</a>
        </div>
      </nav>
    </header>

    <main>

      <div class="row">
        <div class="col-sm-4">
          <div *ngIf="users">
          <ul class="list-group user-list">
            <li class="list-group-item" 
                *ngFor="let user of users"
                (click)="selectUser(user)"
                [class.active]="user === activeUser">
              {{ user.name }} ({{ user.username }})
            </li>
          </ul>
          </div>
        </div>

        <div class="col-sm-8">
          <div class="jumbotron" *ngIf="activeUser">
            <h2>{{ activeUser.name }} <small>{{ activeUser.username }}</small></h2>
          </div>

          <div class="jumbotron" *ngIf="!activeUser">
            <span class="glyphicon glyphicon-hand-left"></span>
            <h2>Choose a user</h2>
          </div>
        </div>
      </div>

    </main>

    <footer class="text-center">
      Copyright &copy; 2016
    </footer>
  `,
  styles: [`
    .user-list li {
      cursor: pointer;
    }

    .jumbotron .glyphicon {
      font-size: 80px;
    }
  `]
})
export class AppComponent {
  message: string = 'Hello!';
  users: User[] = [
    { id: 25, name: 'Tom', username: 'google' },
    { id: 25, name: 'Chris', username: 'facebook' },
    { id: 25, name: 'Holly', username: 'twitter' }
  ];
  activeUser: User;
  selectUser(user: User) {
    this.activeUser = user;
    console.log(user);
  }
}