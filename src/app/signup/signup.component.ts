import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  
  }
  
  onSubmit(form: NgForm){
    localStorage.setItem('name', form.value.username);
    localStorage.setItem('phone', form.value.phone);
    localStorage.setItem('email', form.value.email);
  }
 }

 