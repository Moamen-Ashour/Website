import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('f') resetForm : NgForm;
 

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
    }

   switchLanguage(language: string) {
    this.translate.use(language);

}

  ngOnInit() {
  }

  onCheck(form: NgForm){
    var mail = localStorage.getItem('email');
    var name = localStorage.getItem('name');
    var phone = localStorage.getItem('phone');
    var email = form.value.Email;  
    var phoneN = form.value.Phone;
    if(mail == email && phone == phoneN){
      alert('Welcome ' + name + ' you are logged in') ;
    }else{
      alert('Please check your Email or Password');
    };


   }
   
   onReset(form: NgForm){
    form.reset()
  }

}