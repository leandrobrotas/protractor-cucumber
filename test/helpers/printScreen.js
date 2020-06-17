module.exports = {
   getScreenShotWhenToFail: (scenarioResult, self) => {
      if (scenarioResult.result.status === 'failed') {
         browser.takeScreenshot().then(function (screenshot) {
            const decodedImage = new Buffer.from(screenshot.replace(/^data:image\/png;base64,/, ''), 'base64');
            self.attach(decodedImage, 'image/png');
         });
      }
   }
}