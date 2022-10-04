import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from 'src/app/common/authservice.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-clientdetails',
  templateUrl: './clientdetails.component.html',
  styleUrls: ['./clientdetails.component.css']
})
export class ClientdetailsComponent implements OnInit {

  header:any;
  clientData:any= [];
  
  delete:any;

  daterange = new FormGroup({
    startDate : new FormControl('',Validators.required),
    endDate: new FormControl('',Validators.required)

  });
 


  
  constructor(private clientservice:AuthserviceService) { }
  

  ngOnInit(): void {
    this.clientinfo();
  
   
    
    
    
  }
  clientinfo(){
    
    
    this.clientservice.get('getcar',this.header)
    .subscribe((response:any)=>{
      if(response.status == 1){
        // console.log(response);
        this.clientData = response.data;
        console.log(this.clientData);

        
      }
    })
  }
  deletetabledata(id:any){
    console.log(id);
    
    const deleteData = new FormData();
    deleteData.append('id',id);
    
    this.clientservice.post('removecar', deleteData, '')
    .subscribe((response:any)=>{
      if(response.status==1){
        // console.log(response.id);

        
        this.delete = response;
        window.location.reload();
      }
    })
  }

  onApplydate(){
    const daterangeData = new FormData();
    daterangeData.append('start_date', moment(this.daterange.value.startDate).format("YYYY-MM-DD") );
    daterangeData.append('end_date',moment(this.daterange.value.endDate).format("YYYY-MM-DD"));
    this.clientservice.post('filter', daterangeData, '')
    .subscribe((response:any)=>{
      if(response.status == 1){
        this.clientData = response.data;
        
      }
    })
  }


}
