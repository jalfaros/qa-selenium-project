const { expect } = require('chai');
let { afterEach, beforeEach, it } = require('mocha');
let { Builder, By, Key, until } = require('selenium-webdriver');




describe('Formulario búsqueda en Google', () => {

    const baseURL = 'https://www.google.com';
    let driver;

    beforeEach(async () => {
        driver = await new Builder().forBrowser('firefox').build(); // Se toma el explorador por defecto (Firefox, Google)
        await driver.get(baseURL); //Para abrir la instancia en la web automatizada

    });

    afterEach(() => {
        setTimeout(() => {
            driver.quit();
        }, 5000);
    })


    it('Ejemplo de búsqueda de un elemento de Google', async () => {


        const searchQuery = 'React';
        await driver.findElement(By.name('q')).sendKeys(searchQuery, Key.RETURN);
        await driver.wait(until.titleContains('React'));
        let pageTitle = await driver.getTitle();
        expect(pageTitle).to.equal('React - Buscar con Google');
    });


})  