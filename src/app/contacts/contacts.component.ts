import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from '../common/authservice.service';
import { FormControl, FormGroup,Validators } from '@angular/forms';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  Servicetype:any = [
    
    {
      id:1,
      service:'car-wash',
      value: 'washservice'
    },
    {
      id:2,
      service:'Car-Accessories',
      value: 'accessories'
    },
    {
      id:3,
      service:'Car-Polish',
      value: 'touch-up'
    }
    
  ]
  carvalue:any;


  contactForm = new FormGroup({
    firstname: new FormControl('', [Validators.required,Validators.minLength(2),Validators.maxLength(20),Validators.pattern('[a-zA-Z]+$')]),
    lastname: new FormControl('', [Validators.required,Validators.minLength(2),Validators.maxLength(20),Validators.pattern('[a-zA-Z]+$')]),
    email: new FormControl('', [Validators.required,Validators.email]),
    phone: new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    description: new FormControl('', [Validators.required,Validators.minLength(2),Validators.maxLength(20)]),
    servicetype: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required,Validators.minLength(2),Validators.maxLength(20)]),
  })
  constructor(private contactservice: AuthserviceService, private router: Router) { }

  ngOnInit(): void {
  }
  selectvalue(event:any){
    // console.log(event.target.value);
    this.carvalue =  event.target.value;
    // console.log(this.carvalue);

    
  }
  get f(){
    // console.log(this.contactForm.controls);
    
    return this.contactForm.controls;
  }
  submitcontact() {
    
    
    const contactData = new FormData();

    contactData.append('firstname', this.contactForm.value.firstname);
    contactData.append('lastname', this.contactForm.value.lastname);
    contactData.append('email', this.contactForm.value.email);
    contactData.append('phone', this.contactForm.value.phone);
    contactData.append('description', this.contactForm.value.description);
    contactData.append('servicetype', this.carvalue );
    contactData.append('address', this.contactForm.value.address);
    
    console.log(this.contactForm.value.firstname);
    this.contactservice.post('cars', contactData, '')
      .subscribe((response: any) => {
            if(response.status==1){
              alert(response.message);
            }
      })


  }

}
