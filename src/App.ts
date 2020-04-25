const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const path = require('chromedriver').path;

const service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);


(async () => {
const driver = new webdriver.Builder()
  .withCapabilities(webdriver.Capabilities.chrome())
  .build();
driver.get('http://www.google.com/');
})();
