import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthserviceService } from 'src/app/common/authservice.service';

@Component({
  selector: 'app-updatedetails',
  templateUrl: './updatedetails.component.html',
  styleUrls: ['./updatedetails.component.css']
})
export class UpdatedetailsComponent implements OnInit {
  tabledata:any;
  id:any;
  Servicetype:any = [
    
    {
      id:1,
      name:'car-wash',
      value: 'washservice'
    },
    {
      id:2,
      name:'Car-Accessories',
      value: 'accessories'
    },
    {
      id:3,
      name:'Car-Polish',
      value: 'touch-up'
    }
    
    
  ]
  
  selectedValue:any;
  updatetabledetails:any;
  
  updatedetails = new FormGroup({
    firstname: new FormControl('',[Validators.required]),
    lastname: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required]),
    phone: new FormControl('',[Validators.required]),
    description: new FormControl('',[Validators.required]),
    servicetype: new FormControl('',[Validators.required]),
    address: new FormControl('',[Validators.required]),
    

  })
  token:any;
  header:any;
  username:any;
  

  constructor(private tabledataservice: AuthserviceService ,private route:ActivatedRoute ) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    this.username = localStorage.getItem('username');
    console.log(this.token);
    
    this.header = {
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + this.token
      }
    } 
    
    this.id = this.route.snapshot.params['id'];
    this.gettabledatabyId();

  } 

  selectvalue(event:any){
    this.selectedValue = event.target.value;
  }



  gettabledatabyId(){
    //  console.log(this.id);
    const tabaledata = new FormData();
    tabaledata.append('id',this.id);
    // tabaledata.append('username',this.username);
    this.tabledataservice.post('getcarbyid',tabaledata, this.header)
    .subscribe((response:any)=>{
      if(response.status==1){
         
        this.updatetabledetails = response.data;
       
        

        this.updatedetails.patchValue({
          firstname: this.updatetabledetails.firstname,
          lastname: this.updatetabledetails.lastname,
          email: this.updatetabledetails.email,
          phone: this.updatetabledetails.phone,
          description:this.updatetabledetails.description,
          address: this.updatetabledetails.address,
        })

        
      }
    })

    
  }
  
  sendupdateData(){
    const updateData = new FormData();
    updateData.append('id',this.id);
    updateData.append('firstname', this.updatedetails.value.firstname);
    updateData.append('lastname', this.updatedetails.value.lastname);
    updateData.append('email', this.updatedetails.value.email);
    updateData.append('phone', this.updatedetails.value.phone);
    updateData.append('description', this.updatedetails.value.description);
    updateData.append('servicetype', this.selectedValue);
    updateData.append('address', this.updatedetails.value.address);
    this.tabledataservice.put('updatecars',updateData, this.header)
    .subscribe((response:any)=>{
      if(response.status==1){
        console.log(response.data);
       
        
      }
      window.location.reload();
    })
    

  }
}
