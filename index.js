const {Builder, By, Key, util, WebDriver} = require("selenium-webdriver");

async function example() {
    
    // one idea: first we need to get session ID
    // WebDriver.getSession
    // webdriver.WebDriver.attachToSession // - to work with an open browser session
    
    // another idea:
    // let parent = driver.getWindowHandle();
    // let windows = driver.getAllWindowHandles();

    // driver.switchTo().window(windows[1]);

    // // do some stuff

    // driver.close();
    // driver.switchTo().window(parent);
    // let name = driver.findElements(By.className("artdeco-entity-lockup__title ember-view")).getText(); 
    console.log(parent);
    console.log(windows);
}
example();

// class="artdeco-entity-lockup__title ember-view" - persons name class on linkedin

// driver.findElements(By.className("message_body")).then(function(elements){
//     elements.forEach(function (element) {
//         element.getText().then(function(text){
//             console.log(text);
//         });
//     });
// });

// const {Builder, By, Key, util} = require("selenium-webdriver");
// async function example() {
//     let driver = await new Builder().forBrowser("chrome").build();
//     await driver.get("http://google.com");
//     await driver.findElement(By.name("q")).sendKeys("Selenium if fun",Key.RETURN);
// }
// example();
