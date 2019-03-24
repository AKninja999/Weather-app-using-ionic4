import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  data : any;
  constructor(private weatherService: WeatherService, public global:GlobalService){}
  ngOnInit(){}
  ionViewWillEnter()
  {
    this.weatherService.getdata(this.global.city).subscribe(data=>{
      console.log(data);
      this.data=data;
    })

  }
}
