import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model:any = {};
  @Output() cancelRegister = new EventEmitter();

  constructor(private accountservices:AccountService) { }

  ngOnInit(): void {
  }

  register(){

    this.accountservices.register(this.model).subscribe(response => {
      console.log(response);
      this.cancel();
    }, error => {
      console.log(error);      
    });    
  }

  cancel(){
    this.cancelRegister.emit(false);
  }

}
