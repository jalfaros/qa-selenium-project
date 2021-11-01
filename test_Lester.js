//Imports para realizar las pruebas
const { expect } = require('chai');
let { afterEach, beforeEach, it } = require('mocha');
let { Builder, By, Key, until } = require('selenium-webdriver');
require('chromedriver');


//describe que contiene pruebas para el apartado de new topic
describe('Pruebas automatizadas new topic', () => {

    const baseURL = 'http://192.168.0.112';
    let driver;

    beforeEach(async () => {
        driver = await new Builder().forBrowser('chrome').build(); // Se toma el explorador por defecto (Firefox, Google)
        await driver.get(baseURL); //Para abrir la instancia en la web automatizada

    });

    afterEach(() => {
        setTimeout(() => {
            driver.quit();
        }, 5000);
    })

    it('CP-31: Funcionalidad en el módulo de new topic', async () => {
        const searchQuery = 'React';
        await driver.findElement(By.id('create-topic')).click();
        /*
        await driver.wait(until.titleContains('React'));
        let pageTitle = await driver.getTitle();*/
        //expect(pageTitle).to.equal('React - Buscar con Google');
    });

})  