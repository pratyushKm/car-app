import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthserviceService } from '../common/authservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  header: any;
  token: any
  logoutdisp: any;
  userLoginStatus = 0;
  constructor(private logout: AuthserviceService, private router: Router, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    this.header = {
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + this.token
      }
    }

    this.loggedout();
  }

  loggedout() {
    this.logoutdisp = this.logout.logoutservice();
    console.log(this.logoutdisp);
  }

  onclicklogout() {

    const logoutdata = new FormData();
    this.logout.post('logout', logoutdata, this.header)
      .subscribe((response: any) => {
        if (response.status == 1) {
          localStorage.removeItem('token');
          localStorage.removeItem('expires_in');
          localStorage.removeItem('username');

          this.userLoginStatus = 0;
          this.openSnackBar(response.message , 'Thank You')
          window.location.reload();
          // this.router.navigate(['/']);


        }
        // if(this.userLoginStatus == 0){

        // }

      })



  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action ,{
      duration: 5000,
      verticalPosition: 'top',
      horizontalPosition: 'right',
    });
  }

  // onclickservice(){
  //   window.location.reload();
  // }

}
