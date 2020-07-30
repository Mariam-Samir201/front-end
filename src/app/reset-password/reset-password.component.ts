import { Component, OnInit } from '@angular/core';
import{FormControl,FormGroup,Validators} from '@angular/forms'
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {


  resetForm=new FormGroup({
    'email':new FormControl(null,[Validators.required,Validators.email])
  })

  
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit() {
 
    // TODO: Use EventEmitter with form value
    console.warn(this.resetForm.value);
  }
}
