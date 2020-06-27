import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor (private user:UserService, private router:Router) {
    
    if (localStorage.getItem('email')) {
      this.user.setUserLoggedIn();
    }
  }
}