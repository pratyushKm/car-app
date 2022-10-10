import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CaravailableComponent } from './dashboard/caravailable/caravailable.component';
import { ClientdetailsComponent } from './dashboard/clientdetails/clientdetails.component';
import { UpdatedetailsComponent } from './dashboard/clientdetails/updatedetails/updatedetails.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { ServiceComponent } from './service/service.component';
import { SignupComponent } from './signup/signup.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RegCheckupComponent } from './service/reg-checkup/reg-checkup.component';
import { ViewDetailsComponent } from './dashboard/caravailable/view-details/view-details.component';
import { TaskComponent } from './task/task.component';
import { ParentComponent } from './task/parent/parent.component';
import { ChildComponent } from './task/child/child.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    DashboardComponent,
    CaravailableComponent,
    ClientdetailsComponent,
    UpdatedetailsComponent,
    FooterComponent,
    AboutUsComponent,
    LoginComponent,
    ProfileComponent,
    ServiceComponent,
    SignupComponent,
    ContactsComponent,
    RegCheckupComponent,
    ViewDetailsComponent,
    TaskComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
