import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { RoutGuard } from './common/rout.guard';
import { ContactsComponent } from './contacts/contacts.component';
import { CaravailableComponent } from './dashboard/caravailable/caravailable.component';
import { ViewDetailsComponent } from './dashboard/caravailable/view-details/view-details.component';
import { ClientdetailsComponent } from './dashboard/clientdetails/clientdetails.component';
import { UpdatedetailsComponent } from './dashboard/clientdetails/updatedetails/updatedetails.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegCheckupComponent } from './service/reg-checkup/reg-checkup.component';
import { ServiceComponent } from './service/service.component';
import { SignupComponent } from './signup/signup.component';
import { TaskComponent } from './task/task.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'aboutus', component: AboutUsComponent },
  { path: 'service', component: ServiceComponent, canActivate: [RoutGuard] },
  { path: 'contacts', component: ContactsComponent, canActivate: [RoutGuard] },
  { path: 'login', component: LoginComponent, },
  { path: 'signup', component: SignupComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [RoutGuard] },
  {
    path: 'dashboard', component: DashboardComponent, canActivate: [RoutGuard],
    children: [
      { path: 'clientinfo', component: ClientdetailsComponent },
      { path: 'availablecar', component: CaravailableComponent },
    ]
  },
  { path: 'update/:id', component: UpdatedetailsComponent },
  { path: 'viewdetails', component: ViewDetailsComponent },
  { path: 'regularchechkup', component: RegCheckupComponent ,canActivate: [RoutGuard]},
   { path: 'task', component:TaskComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
