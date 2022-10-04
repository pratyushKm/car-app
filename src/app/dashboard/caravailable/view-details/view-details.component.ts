import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthserviceService } from 'src/app/common/authservice.service';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {
  id:any;
  viewMore:any;
  constructor(private route:ActivatedRoute, private availableservice:AuthserviceService ) { 
    
  }

  
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      console.log(params);
      this.id = params.id;
      console.log(this. id)
    });
    
    this.viewDetaildata();
    
  }

  viewDetaildata(){
 
    const newViewdetail = new FormData();
    newViewdetail.append('id',this.id);
    this.availableservice.post('carbyid?id='+ this.id, newViewdetail,'').subscribe((response:any)=>{
     if(response.status==1){
      console.log(response);
      this.viewMore = response.data;
  
     }     
    })
  }


  getdataFromid(){
    const getviewMore = new FormData();
    getviewMore
  }
}
