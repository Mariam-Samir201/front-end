import { Component, OnInit } from '@angular/core';
import {FormControl ,FormGroup , Validators} from '@angular/forms'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm:FormGroup = new FormGroup({

    'full_name':new FormControl(null, [Validators.required, Validators.minLength(5)]),
    'email': new FormControl(null, [Validators.required, Validators.email]),
  })

  constructor() { }

  ngOnInit(): void {
  }


  contact(data){
    console.log(data.value);
  }


}
