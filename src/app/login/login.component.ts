import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthserviceService } from '../common/authservice.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logindata:any = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  })
  userLoginStatus= 0;
  uloginSubmit = 0;
  token: any;
  tokenexpire: any;
  loginStatus: any;
  header:any;
  role:any;

  constructor(private router: Router, private userlog: AuthserviceService,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {

    
    if (this.userlog.logoutservice() == true) {
      this.router.navigate(['/']);
    }
    
   
  }

  loginsubmit(){
    this.userLoginStatus = 1;
    const loginData = new FormData();
    loginData.append('username', this.logindata.value.username);
    loginData.append('password', btoa(this.logindata.value.password));        
    this.userlog.post('login', loginData, '')
    .subscribe((response:any) => {
      console.log(response);
      if(response.status == 1){
        console.log(response); 
        localStorage.setItem('token', response.token);
        localStorage.setItem('expires_in', response.expires_in);
        localStorage.setItem('username',response.username);
        localStorage.setItem('role',response.authenticatedUser.role)
        this.openSnackBar(response.message , 'Thank You')
       
        
        
           window.location.reload();
        
        
      }
    // if(this.userLoginStatus == 1){
        
    //   this.router.navigate(['/']);
    //   }
      return true;
      
      
    })
    
 
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action ,{
      duration: 5000,
      verticalPosition: 'top',
      horizontalPosition: 'right',
    });
  }

}
