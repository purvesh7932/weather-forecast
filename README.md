# Weather Forecast

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.0.

## Setup angular weather forecast project in your system

Run `git clone https://github.com/ankurradadiya/weather-forecast.git`

## Install node module

Run `npm install` on your terminal first.

## Development server

Run `ng serve` for a dev server. Navigate to Ex.`http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Setup PHP api in your wamp/xampp server

PHP source of code : `api/weather`
Database of city : `api/db/weather.sql`

You need to setup on your php wamp/xampp server weather api souce code already attached with this repo inside api/...


## How do I import a database to phpMyAdmin?

```
Step 1 - Click Databases in the top-menu.
Step 2 - Click the name of the database you want to import to.
Step 3 - Click Import.
Step 4 - Choose file and click Go. Click Choose file and select the database file you want to import.
Step 5 - You're done. The import is now done.
```

## Database Configuration

File path `api/weather/index.php`

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

