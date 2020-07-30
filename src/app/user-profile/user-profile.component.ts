import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
  Validator
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  constructor(_Router: Router, private _FormBuilder: FormBuilder,private http:HttpClient) {
    let token = localStorage.getItem('token');
    //user not loged in
    if (token == null) {
      _Router.navigateByUrl('/login');
    }
  }
  //slidebar
  events: string[] = [];
  opened: boolean;
/////////////
//profile img/////
//selectedImage=null;
fileData: File = null;
previewUrl:any = null;
//fileUploadProgress: string = null;
//uploadedFilePath: string = null;
//user information form
userInformationForm =this._FormBuilder.group({
  'name': [null, [Validators.required,Validators.minLength(3)]],
   'email':[null,[Validators.required,Validators.email]],

  });


/////////////////////  
 
 
  changeInfo(){
  console.warn(this.userInformationForm.value);
 
  }
  updateProfile() {
   // this.changePasswordForm.get('name').setValue('fatma')
     /* this.userInformationForm.patchValue({
      name: 'fatma',
    });  */
  // this.myForm.get('resetPassword').errors
  }

  onFileSelected(event){
//console.log(event);
//this.selectedImage=event.target.files[0];
  }
  fileProgress(fileInput: any) {
    this.fileData = <File>fileInput.target.files[0];
    this.preview();
}

preview() {
  // Show preview 
  let reader = new FileReader();      
  reader.readAsDataURL(this.fileData); 
  reader.onload = (_event) => { 
    this.previewUrl = reader.result; 
  }
}

onSubmit() {
  /* const formData = new FormData();
    formData.append('file', this.fileData);
    this.http.post('url/to/your/api', formData)
      .subscribe(res => {
        console.log(res);
        this.uploadedFilePath = res.data.filePath;
        alert('SUCCESS !!');
      }) */
}

  ngOnInit(): void {}
}
