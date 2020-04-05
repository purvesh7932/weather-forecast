import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { catchError, tap, map, } from 'rxjs/operators';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(
    private http: HttpClient
  ) { }

  // Get the details of default city
  getDefaultCityWeather(): Observable<any> {
    return this.http.get<any>(
      environment.baseUrl +
      'weather?q=bangalore' +
      '&appid=' + environment.appId +
      '&units=metric' +
      '&lang=en').pipe(
      tap((weatherdata: any) => console.log(`weatherdata`)),
      catchError(this.handleError<any>('error'))
    );
  }

  // Get the details of user selected city
  getCityDetail(cityid): Observable<any> {
    return this.http.get<any>(
      environment.baseUrl +
      'weather?id=' + cityid.id +
      '&appid=' + environment.appId +
      '&units=metric' +
      '&lang=en').pipe(
      tap((citydata: any) => console.log(`citydata`)),
      catchError(this.handleError<any>('error'))
    );
  }

  // Load all cities 
  loadCities(): Observable<any> {
    return this.http.get<any>(
      environment.apiPath).pipe(
      tap((loadcitydata: any) => console.log(`loadcitydata`)),
      catchError(this.handleError<any>('error'))
    );
  }

  getCityForecastWeatherReport(cityid):Observable<any> {
    return this.http.get<any>(
      environment.baseUrl +
      'forecast?id=' + cityid.id +
      '&appid=' + environment.appId +
      '&units=metric' +
      '&lang=en').pipe(
      tap((loadcitydata: any) => console.log(`loadforecastcitydata`)),
      catchError(this.handleError<any>('error'))
    );
  }

   // Error
   private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

}
