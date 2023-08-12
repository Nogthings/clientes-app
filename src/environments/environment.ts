// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  name:'dev',
  firebase:{
    config : {

      apiKey: "",

      authDomain: "inmuebles-storage.firebaseapp.com",

      projectId: "inmuebles-storage",

      storageBucket: "inmuebles-storage.appspot.com",

      messagingSenderId: "483272877016",

      appId: "1:483272877016:web:79183e59622f8a7e3748ad"

    }
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
