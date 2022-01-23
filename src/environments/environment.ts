// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCmpQEpmVGES_bj88hh5he-hVClBZfLTEA",
    authDomain: "ng-fitness-tracker-e536d.firebaseapp.com",
    projectId: "ng-fitness-tracker-e536d",
    storageBucket: "ng-fitness-tracker-e536d.appspot.com",
    messagingSenderId: "625413126388",
    appId: "1:625413126388:web:e3f282563262636076c6a1",
    measurementId: "${config.measurementId}"
  }
};
