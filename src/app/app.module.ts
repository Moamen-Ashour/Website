import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupComponent } from './signup/signup.component';
import { PViewService } from './p-view.service';
import { Routes, RouterModule } from '@angular/router';
import { PViewComponent } from './pview/pview.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ItemComponent } from './item/item.component';


const appRoutes: Routes=[
  { path:'login', component: LoginComponent},
  { path:'signup', component: SignupComponent},
  { path:'pview', component: PViewComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    PViewComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    SlickCarouselModule
  ],
  providers: [PViewService],
  bootstrap: [AppComponent]
})
export class AppModule { }
