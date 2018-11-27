import { Component , OnInit} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

 
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
    }

   switchLanguage(language: string) {
    this.translate.use(language);

   }

    ngOnInit(){} 
      ChangeRtl(): void {
      const body = document.getElementsByTagName('html')[0];
      body.classList.add('rtl');
    }
  
    
    ChangeRtlP(): void {
      const body = document.getElementsByTagName('p')[0];
      body.classList.add('floatPR');
    }
       
    ChangeRtlB(): void {
      const body = document.getElementsByTagName('button')[0];
      body.classList.add('floatBR');
    }
  
     ChangeLtr(): void {
      const body = document.getElementsByTagName('html')[0];
      body.classList.remove('rtl');
    }

    
    ChangeLtlP(): void {
      const body = document.getElementsByTagName('p')[0];
      body.classList.remove('floatPR');
    }
       
    ChangeLtlB(): void {
      const body = document.getElementsByTagName('button')[0];
      body.classList.remove('floatBR');
    }
   }
