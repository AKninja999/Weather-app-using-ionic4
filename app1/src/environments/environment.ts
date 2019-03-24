// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl1:' https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?q=',
  apiUrl2:' https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/forecast?q=',
  
  apiKey: '5cbf4cc923a99b217280a27fc475a97f'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
