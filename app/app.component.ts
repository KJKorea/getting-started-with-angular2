import { Component } from '@angular/core';
import { User } from './shared/models/user';

@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html',
  styleUrls: ['./app/app.component.css']
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