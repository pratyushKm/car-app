import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../common/authservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  logoutdisp: any;
  constructor(private logout: AuthserviceService) { }

  ngOnInit(): void {
    this.loggedout();
  }
  loggedout() {
    this.logoutdisp = this.logout.logoutservice();
    console.log(this.logoutdisp);
  }

}
