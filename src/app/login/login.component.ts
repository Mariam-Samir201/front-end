import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validator, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  
  constructor(public _AuthService:AuthService,public _Router:Router) {}
signinForm=new FormGroup({
  'email':new FormControl(null,[Validators.required,Validators.email]),
  'password':new FormControl(null,[Validators.required,Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)]),
})
 
  login() {
   this._AuthService.login(this.signinForm.value).subscribe(res=>{
    console.log(res);
    localStorage.setItem('token',res.token);
    this._Router.navigateByUrl('/home');
   },err=>{console.log(err);})
    
  }
  ngOnInit(): void {}
  // TODO: Remove this when we're done
  //get userlogin data
  //get diagnostic() { return JSON.stringify(this.userlogin); }
}
