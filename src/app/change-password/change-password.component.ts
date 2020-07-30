import { Component, OnInit } from '@angular/core';
import { FormBuilder ,Validators} from '@angular/forms';
import { PasswordValidator } from '../shared/password.validator';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  opened: boolean;
  constructor(private _FormBuilder:FormBuilder) { }
  changePasswordForm =this._FormBuilder.group({
        'oldpassword': [null,[Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)]],
        'newpassword': [null,[Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)]],
        'confirmpassword': [null,[Validators.required]]
    
  },{validator:PasswordValidator});
  changePassword(){
 console.warn(this.changePasswordForm.value);
  }
  ngOnInit(): void {
  }

}
