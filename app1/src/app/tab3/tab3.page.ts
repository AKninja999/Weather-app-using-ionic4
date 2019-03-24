import { Component,OnInit } from '@angular/core';
import { GlobalService } from '../global.service';


 
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page{
name : string;
 constructor(public global : GlobalService) {}
 
 onclick(city : string , cid : string){
  this.global.city = city;
  this.global.cid = cid;
  console.log(city);
  console.log(cid);
}
}
