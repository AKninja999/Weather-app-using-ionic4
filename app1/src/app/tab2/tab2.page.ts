import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';
import { GlobalService } from '../global.service';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  data: any;
  page = 1;
  constructor(private weatherService: WeatherService, public global: GlobalService) {}

  ngOnInit() {}
  ionViewWillEnter(){
    this.weatherService.getfordata(this.global.city,this.global.cid).subscribe(data => {
        console.log(data);
        this.data = data;
      });
  }

}
