import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {


  siginupForm=new FormGroup({
    'first':new FormControl(null,[Validators.required,Validators.maxLength(8),Validators.minLength(3)]),
    'last':new FormControl(null,[Validators.required,Validators.maxLength(8),Validators.minLength(3)]),
    'email':new FormControl(null,[Validators.required,Validators.email]),
    'password':new FormControl(null,[Validators.required,Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)]),
    'repassword':new FormControl(null,[Validators.required])




  })
  onSubmit() {
 
    // TODO: Use EventEmitter with form value
    console.warn(this.siginupForm.value);
  }
  constructor() { }

  ngOnInit(): void {
  }


}
