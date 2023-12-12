import { Component,OnInit } from '@angular/core';
import { ApiService} from '../service/api.service';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  res:any;
  constructor(private http:ApiService){}
  // callapi(){
  // this.http.Fetchdata().pipe(
  //   // Assuming the API response is an array
  //   filter((item: any) => item.description !== null && item.description !== "")
  // ).subscribe((filterdata)=>{
  //   this.res=filterdata
  //   console.log(this.res);
  // })
  // }
  callapi() {
    this.http.Fetchdata().pipe(
      // Assuming the API response is an array
      filter((item: any) => item.description !== null && item.description !== "")
    ).subscribe((filteredData) => {
      this.res = filteredData;
      console.log(this.res);
    });
  }
}
