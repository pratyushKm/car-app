import { Component, OnInit } from '@angular/core';
import { servicedata } from './serviceData';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  showDATAofservice:any = servicedata;
  allservice:any;
 
  constructor() { }

  ngOnInit(): void {
    this.servicedatashow();
    
    console.log(this.allservice);
    
    
  }

  servicedatashow(){
    this.allservice = this.showDATAofservice;
  }
  
  // onclickservice(){
  //   window.location.reload();
  // }

}
