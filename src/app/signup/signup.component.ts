import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthserviceService } from '../common/authservice.service';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  role:any=[
    'account_manager',
    'project_manager'
  ]

  regesterData:any = new FormGroup({
    username : new FormControl('',[Validators.required]),
    password: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    full_name: new FormControl('', [Validators.required]),
    role: new FormControl('', [Validators.required])


  })
  uname:any;
  constructor( private signupservice: AuthserviceService,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }
  
  
  
  
  
  registersubmit(){
    console.log(this.regesterData.value.username);
    this.uname = this.regesterData.value.username
    
    // this.userLoginStatus = 1;
    const regData = new FormData();
    regData.append('username', this.regesterData.value.username);
    regData.append('password', btoa(this.regesterData.value.password));        
    regData.append('email', this.regesterData.value.email);        
    regData.append('full_name', this.regesterData.value.full_name);        
    regData.append('role', this.regesterData.value.role);        
    this.signupservice.post('managerRegister', regData, '')
    .subscribe((response:any) => {
      console.log(response);
      if(response.status == 1){
        console.log(response);   
        this.openSnackBar(response.message , 'Thank You')
         window.location.reload();  
      }
      // if(this.userLoginStatus == 1){
        
      //   this.router.navigate(['/']);
      // }
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
