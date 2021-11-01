const { expect } = require('chai');
let { afterEach, beforeEach, it } = require('mocha');
let { Builder, By, Key, until } = require('selenium-webdriver');
require('chromedriver');


//describe que contiene pruebas para el apartado de new topic
describe('Pruebas automatizadas new topic', () => {

    const baseURL = 'http://192.168.3.69';
    let driver;

    beforeEach(async () => {
        driver = await new Builder().forBrowser('chrome').build(); // Se toma el explorador por defecto (Firefox, Google)
        await driver.get(baseURL); //Para abrir la instancia en la web automatizada

    });

    afterEach(() => {
        setTimeout(() => {
            driver.quit();
        }, 8000);
    })
//Funcionalidad de modulo de registro
it('Ejemplo de usuario sin errores en el registro de usuarios', async () => {

    await driver.findElement(By.className('widget-button btn btn-primary btn-small sign-up-button btn-text')).click();
    // await driver.wait(until.titleContains('React'));
    await driver.findElement(By.name('email')).sendKeys('Warner3898@gmail.com');

    await driver.findElement(By.name('username')).sendKeys('buhito12345');

    await driver.findElement(By.id('new-account-name')).sendKeys('Warner Hurtado Laguna');

    await driver.findElement(By.id('new-account-password')).sendKeys('quesito123');
    
    setTimeout(async() => {
        await driver.findElement(By.xpath("//span[text()='Create your account']")).click();
        expect(await driver.findElement(By.xpath("//p[text()='If it doesn’t arrive, check your spam folder.']")).getText()).to.equal('If it doesn’t arrive, check your spam folder.');
    }, 5000);


});



})