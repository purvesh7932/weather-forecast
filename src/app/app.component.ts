import { Component } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { environment } from '.././environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Weather Forecast';
  data: any;
  elem:any;
  city: any;
  items :any;
  todayDate : Date = new Date();
  selected :any;
  forecast:any;
  iconpath = environment.imgpath;
  events:any;

  constructor(
    private weatherservice: WeatherService
  ) { }

  ngOnInit() {
      this.loadDefaultWeatherCity();
      this.loadCity();
  }

   //Get Default City Weather Details. 
   loadDefaultWeatherCity(){
      this.weatherservice.getDefaultCityWeather().subscribe(res => {
        this.data = res;
        console.log(this.data);
        if (this.data !== null) {
          return this.data;
        }
      }, (err) => {
        console.log(err);
      });
   }
   
   onClear(){
    this.selected = "";
    this.forecast = [];
    this.city = null;
   }

   // Load all cities in search box 
    loadCity(){
      this.weatherservice.loadCities().subscribe(res => {
        this.items = res;
        if (this.items !== null) {
          return this.items;
        }
      }, (err) => {
         console.log(err);
    });
  }

   // Get selected city info.
   getValues() {
      if(this.selected !==null){
          this.weatherservice.getCityDetail(this.selected).subscribe(res => {
            this.city = res;
            this.getCityWeatherReport();
            if (this.city !== null) {
              return this.city;
            }
          }, (err) => {
            console.log(err);
          });
      }
   }

   // Get full wether report of the user selected city
   getCityWeatherReport(){
    if(this.selected !==null){
          this.weatherservice.getCityForecastWeatherReport(this.selected).subscribe(res => {
            this.forecast = res;
            if (this.forecast.cod === "200") {
              return this.forecast;
            }
          }, (err) => {
            console.log(err);
          });
      } 
   }

   onOpen(elem){
    if(elem.filterInput.nativeElement.value == ""){
      elem.close();
    }
   }

   onRemove($event) {
      console.log($event);
      this.events.push({ name: '(remove)', value: $event });
    }
}

