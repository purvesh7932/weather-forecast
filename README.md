# WeatherForecast

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.0.

## Install node module

Run `npm install` on your terminal first.

## Development server

Run `ng serve` for a dev server. Navigate to Ex.`http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Setup Api PHP 

Source of code inside `api/weather`
Database of city  `api/db/weather`

You need to setup on your php wamp/xammp server weather api souce code


## How to import database in phpMyAdmin

Please refer this link  https://help.one.com/hc/en-us/articles/115005588189-How-do-I-import-a-database-to-phpMyAdmin-

## Database Configuration

```
$servername = "localhost";
$username   = "root";
$password   = "";
$dbname     = "weather";
``` 


## Environment Setting

Path of environment file `weather-forecast\src\environments\environment.ts`

```
export const environment = {
    production: false,
    appId: 'ff5d084541aac5b27ef0f46c449da8ca',
    baseUrl: 'http://api.openweathermap.org/data/2.5/',
    imgpath: 'http://openweathermap.org/img/w/',
    apiPath: 'http://localhost/weather/index.php'
};
``` 

