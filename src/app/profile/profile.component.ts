import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthserviceService } from '../common/authservice.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  
  gender: any = [
    {
      id: 1,
      gender: 'Male',
      value: 'male'
    },
    {
      id: 2,
      gender: 'Female',
      value: 'female'
    },
    {
      id: 3,
      gender: 'Others',
      value: 'others'
    }
  ]


  gendervalue: any;
  file: any;
  header: any;
  getprofdata: any;
  imgurl: any;
  fname: any;
  lname: any;
  genders: any;
  username: any;
  token:any;
  role:any;





  profileForm:any = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    firstname: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(5)]),
    lastname: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(5), Validators.pattern('[a-zA-Z]+$')]),
    gender: new FormControl('', [Validators.required]),
    profilepicture: new FormControl('', [Validators.required]),
    pincode: new FormControl('', [Validators.required, Validators.pattern("^((\\00?)|0)?[0-9]{6}$")]),
    address: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]),
  })

  constructor(private profservice:AuthserviceService) { }


  ngOnInit(): void {
    this.username = localStorage.getItem('username');
    this.role = localStorage.getItem('role');

    //  console.log(this.username);

    this.token = localStorage.getItem('token');
    this.header = {
    headers: {
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + this.token
    }
  }

    this.getprofileData();

  }



  // For Gender
  changeGender(event: any) {
    console.log(this.gender[0]);
    this.gendervalue = event.target.value;
  }



  // Validation
  get f() {
    // console.log(this.profileForm.controls);

    return this.profileForm.controls;
  }

  // For File Uploades

  getFile(event: any) {
    this.file = event.target.files[0];
    console.log(this.file);

  }

  // profile data submit
  submitprofile() {
    const profData = new FormData();
    profData.append('email', this.profileForm.value.email)
    profData.append('username', this.profileForm.value.username)
    profData.append('firstname', this.profileForm.value.firstname);
    profData.append('lastname', this.profileForm.value.lastname);
    profData.append('gender', this.gendervalue);
    profData.append('profilepicture', this.file);
    profData.append('pincode', this.profileForm.value.pincode);
    profData.append('adress', this.profileForm.value.address);
    this.profservice.post('profile', profData, this.header)
      .subscribe((response: any) => {
        if (response.status == 1) {
          console.log(response);
           window.location.reload();

        }
      })
  }
  // getting data From profile
  getprofileData() {
    console.log(this.header);
    const newformdata = new FormData()
    newformdata.append('username', this.username),
    // newformdata.append('role', this.role)

    this.profservice.post('getprofile', newformdata, this.header)
      .subscribe((response: any) => {
        if (response.status == 1) {
          console.log(response);
          console.log(response.data.address);
          
          

          this.getprofdata = response.data;
          this.imgurl = this.getprofdata.profilepicture;
          this.fname = this.getprofdata.firstname;
          this.lname = this.getprofdata.lastname;
          this.genders = this.getprofdata.gender;
          this.profileForm.patchValue({
            email: this.getprofdata.email,
            username: this.getprofdata.username,
            firstname: this.getprofdata.firstname,
            lastname: this.getprofdata.lastname,
            gender: this.getprofdata.gender,
            profilepicture: this.getprofdata.profilepicture,
            pincode: this.getprofdata.pincode,
            address: this.getprofdata.address



          })
          
          // console.log( this.getprofdata.profilepicture);
          


        }
        

      })


  }

}
