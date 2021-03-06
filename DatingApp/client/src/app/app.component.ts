import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './_models/users';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Dating App';
  users: any;

  constructor(private accountservice : AccountService) { }

  ngOnInit() {
    //this.getUsers();
    this.setCurrentUser();
  }

  setCurrentUser(){
    //const temp: string | null = localStorage.getItem('user');
    //const user: User = JSON.parse(temp == null ? '' : temp);
    const user: User = JSON.parse(localStorage.getItem('user'));
    this.accountservice.setCurrentUser(user);
  }

  // getUsers() {
  //   this.http.get('https://localhost:44380/api/Users').subscribe(response => {
  //     this.users = response;
  //     console.log(this.users);
  //   }, error => {
  //     console.log(error);
  //   })
  // }

}
