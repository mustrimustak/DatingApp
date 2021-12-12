import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { User } from '../_models/users';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model:any = {}
  //loggedIn: boolean = false;
  //currentUser$: Observable<User>;

  constructor(public accountservices:AccountService,private router: Router,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    //this.getCurrentUser();
    //this.currentUser$ = this.accountservices.currentUser$;
  }
  
  logout()
  {
    this.accountservices.logout();
    this.router.navigateByUrl('/');
    //this.loggedIn = false;
  }

  // getCurrentUser(){
  //   this.accountservices.currentUser$.subscribe(user => {
  //    this.loggedIn = !!user;
  //    //console.log(this.loggedIn);
  //   }, error => {
  //     console.log(error);
  //   })
  // }

  login()
  {
    this.accountservices.login(this.model).subscribe(response =>
      {
        console.log(response);
        this.router.navigateByUrl('/members');
        //this.loggedIn = true;
      },
      error=>
      {
        console.log(error);
        this.toastr.error(error.error);
      })    
  }
  

}
