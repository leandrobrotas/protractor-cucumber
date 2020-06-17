"use strict";
const { After, Before } = require("cucumber"),
  driver = browser.driver,
  getScreenShotWhenToFail = require('../helpers/printScreen').getScreenShotWhenToFail

function clearStorage() {
  window.sessionStorage.clear();
  window.localStorage.clear();
}


// /********* LOGIN ************/
// Before(function () {
//   browser.waitForAngularEnabled(false);
//   // browser.driver.manage().window().maximize();
//   // browser.manage().window().setSize(1600,2400); 
//   return driver.get(url);



// });



After(function (scenarioResult) {
  let self = this;

  getScreenShotWhenToFail(scenarioResult, self);

  // console.log("Cenário  = ", scenarioResult.pickle.name);
  driver.manage().deleteAllCookies();
  return driver.executeScript(clearStorage); //função para limpar cash do navegador.
});



