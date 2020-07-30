import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() {
  
   }
   checklogin(){
   let token=localStorage.getItem('token');
    //user not loged in
    if(token==null){
   return false;
    }else{
      return true;
    }
   }
   logOut(){
     localStorage.removeItem('token');
   }

  ngOnInit(): void {
  }

}
