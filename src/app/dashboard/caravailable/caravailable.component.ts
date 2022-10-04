import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from 'src/app/common/authservice.service';
import * as moment from 'moment';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-caravailable',
  templateUrl: './caravailable.component.html',
  styleUrls: ['./caravailable.component.css']
})
export class CaravailableComponent implements OnInit {

  header:any= '';
  availableData:any;
  newdate:any;
  datefom:any=[];
  element:any;
  id:any;
  
  constructor(private availableservice:AuthserviceService ,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.available(); 
    // this.id = this.route.params.path[0]
 
    
  }
  

available(){
  this.availableservice.get('carAvailable',this.header)
  .subscribe((response:any) =>{
    if(response.status==1){
      // console.log(response);
      this.availableData = response.data;
      // this.id = response.data[0].id;
      // console.log(this.id);
      
      // console.log(this.availableData);

      for (let i = 0; i < this.availableData.length; i++) {
        this.availableData[i].dateTime = moment(this.availableData[i].dateTime).format("MMM Do YY");;
      }
      console.log(this.availableData);


      // this.datefom.push(moment(this.element).format('MMM D YYYY'))

    
      
      
    }
  })
}



}



