import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {



  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
    }

   switchLanguage(language: string) {
    this.translate.use(language);

}
  ngOnInit() {
  
  }
  
  onSubmit(form: NgForm){
    localStorage.setItem('name', form.value.username);
    localStorage.setItem('phone', form.value.phone);
    localStorage.setItem('email', form.value.email);
  }
 }

 