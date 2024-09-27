// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // gateway: 'http://localhost:8000',
  gateway: 'https://api.az0.biz',
  authenticate: 'http://localhost:8000',
  // authenticate: 'https://apiauth.az0.biz',
  files: '',
  LOCAL_STORAGE: 'token',
  firebase: {
    apiKey: "AIzaSyDtg3CkN2hYzXpXLKYXzVI7ntzyMVyCcgQ",
    authDomain: "sapopan.firebaseapp.com",
    projectId: "sapopan",
    storageBucket: "sapopan.appspot.com",
    messagingSenderId: "232573747410",
    appId: "1:232573747410:web:8421ea9132d153c2bbad0b"
  }
};

/*
* For easier debugging in development mode, you can import the following file
* to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
*
* This import should be commented out in production mode because it will have a negative impact
* on performance if an error is thrown.
*/
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.