//Imports para realizar las pruebas
const { expect } = require('chai');
let { afterEach, beforeEach, it } = require('mocha');
const { WebDriver } = require('selenium-webdriver');
let { Builder, By, Key, until } = require('selenium-webdriver');
let { Select } = require('selenium-webdriver');
//require('chromedriver');
const sleep = require('util').promisify(setTimeout)

//describe que contiene pruebas para el apartado de new topic 
describe('Pruebas automatizadas new topic', () => {

    const baseURL = 'http://192.168.0.104';
    let driver;
    
    beforeEach(async () => {
        driver = await new Builder().forBrowser('firefox').build(); // Se toma el explorador por defecto (Firefox, Google)
        await driver.get(baseURL); //Para abrir la instancia en la web automatizada
        //Automatizacion del login
        await driver.findElement(By.xpath("//span[text()='Log In']")).click();
        await driver.findElement(By.id('login-account-name')).sendKeys("user");
        await driver.findElement(By.id('login-account-password')).sendKeys("HwwgTr1NwHI1");
        await driver.findElement(By.id('login-button')).click();
        await sleep(5000);  
    });

    it('CP-31: Funcionalidad en el módulo de new topic', async () => {
        await sleep(2000)
        await driver.findElement(By.id('create-topic')).click();
        await sleep(3000)  
        await driver.findElement(By.id('reply-title')).clear();
        await sleep(4000)  
        await driver.findElement(By.id('reply-title')).sendKeys("Ejemplo Título NuevoTest18");
        try {
            selectElem = await driver.findElement(By.name('Filter by: Uncategorized'))
            selectElem.click()
        } catch (error) {
            selectElem = await driver.findElement(By.name('Filter by: Staff'))
            selectElem.click()
        }
        await sleep(1000)
        await driver.findElement(By.className('select-kit-row category-row is-highlighted ember-view')).click();
        await driver.findElement(By.className('btn btn-icon-text btn-primary create ember-view')).click();
        await driver.findElement(By.className('d-editor-input ember-text-area ember-view')).sendKeys("prueba para el apartado post");
        await sleep(500)
        await driver.findElement(By.xpath("//span[text()='Create Topic']")).click();
        await driver.wait(until.titleContains('Ejemplo Título NuevoTest'));
        let pageTitle = await driver.getTitle();
        expect(pageTitle).to.equal('Ejemplo Título NuevoTest18 - Staff - Discourse');
    });

    it('CP-32: Funcionalidad en el módulo de new topic', async () => {
        await sleep(2000)
        await driver.findElement(By.id('create-topic')).click();
        await sleep(3000)  
        await driver.findElement(By.id('reply-title')).clear();
        await sleep(3000)
        await driver.findElement(By.className('d-editor-input ember-text-area ember-view')).clear();
        await sleep(500)
        await driver.findElement(By.xpath("//span[text()='Create Topic']")).click();
        expect(await driver.findElement(By.className('popup-tip bad ember-view')).getText()).to.equal('Title is required');
    });

       
    it('CP-33: Funcionalidad en el módulo de new topic', async () => {
        await sleep(2000)
        await driver.findElement(By.id('create-topic')).click();
        await sleep(3000)  
        await driver.findElement(By.id('reply-title')).clear();
        await sleep(3000)
        await driver.findElement(By.className('d-editor-input ember-text-area ember-view')).sendKeys("prueba para el apartado post");
        await sleep(500)
        await driver.findElement(By.xpath("//span[text()='Create Topic']")).click();
        expect(await driver.findElement(By.className('popup-tip bad ember-view')).getText()).to.equal('Title is required');
    });
       

    it('CP-34: Funcionalidad en el módulo de new topic', async () => {
        await sleep(2000)
        await driver.findElement(By.id('create-topic')).click();
        await sleep(3000)  
        await driver.findElement(By.id('reply-title')).clear();
        await sleep(4000)  
        await driver.findElement(By.id('reply-title')).sendKeys("Ejemplo Título NuevoTest100");
        await sleep(1000)
        await driver.findElement(By.className('d-editor-input ember-text-area ember-view')).clear();
        await sleep(1000)
        await driver.findElement(By.xpath("//span[text()='Create Topic']")).click();
        expect(await driver.findElement(By.className('popup-tip bad ember-view')).getText()).to.equal('Post can’t be empty');
    });
     
    it('CP-35: Funcionalidad en el módulo de new topic', async () => {
        await sleep(2000)
        await driver.findElement(By.id('create-topic')).click();
        await sleep(3000)  
        await driver.findElement(By.id('reply-title')).clear();
        await sleep(4000)  
        await driver.findElement(By.id('reply-title')).sendKeys("Título 1");
        await sleep(3000)
        await driver.findElement(By.className('d-editor-input ember-text-area ember-view')).sendKeys("prueba para el apartado post");
        await sleep(500)
        await driver.findElement(By.xpath("//span[text()='Create Topic']")).click();
        expect(await driver.findElement(By.className('popup-tip bad ember-view')).getText()).to.equal('Title must be at least 15 characters');
    });
 
   
    it('CP-36: Funcionalidad en el módulo de new topic', async () => {
        await sleep(2000)
        await driver.findElement(By.id('create-topic')).click();
        await sleep(2000)  
        await driver.findElement(By.id('reply-title')).clear();
        await sleep(3000)  
        await driver.findElement(By.id('reply-title')).sendKeys("Ejemplo Título NuevoTest101");
        await driver.findElement(By.className('d-editor-input ember-text-area ember-view')).sendKeys("prueba para el apartado post");
        await sleep(500)
        await driver.findElement(By.xpath("//span[text()='Create Topic']")).click();
        await driver.wait(until.titleContains('Ejemplo Título NuevoTest'));
        let pageTitle = await driver.getTitle();
        expect(pageTitle).to.contains('Ejemplo Título NuevoTest101 - Discourse');
    });

    it('CP-37: Funcionalidad en el módulo de new topic', async () => {
        await sleep(2000)
        await driver.findElement(By.id('create-topic')).click();
        await sleep(3000)  
        await driver.findElement(By.id('reply-title')).clear();
        await sleep(4000)  
        await driver.findElement(By.id('reply-title')).sendKeys("holaholaholahola");
        await sleep(1000)
        await driver.findElement(By.className('d-editor-input ember-text-area ember-view')).sendKeys("prueba para el apartado post");
        await sleep(500)
        await driver.findElement(By.xpath("//span[text()='Create Topic']")).click();
        await sleep(6000)
        expect(await driver.findElement(By.className('modal-body')).getText()).to.equal('Title seems unclear, most of the words contain the same letters over and over?');
    });


    it('CP-38: Funcionalidad en el módulo de new topic', async () => {
        await sleep(2000)
        await driver.findElement(By.id('create-topic')).click();
        await sleep(3000)  
        await driver.findElement(By.id('reply-title')).clear();
        await sleep(4000)  
        await driver.findElement(By.id('reply-title')).sendKeys("Ejemplo Título Nuevo");
        await driver.findElement(By.className('d-editor-input ember-text-area ember-view')).clear();
        await sleep(1000)
        await driver.findElement(By.className('d-editor-input ember-text-area ember-view')).sendKeys("holat");
        await sleep(500)
        await driver.findElement(By.xpath("//span[text()='Create Topic']")).click();
        await sleep(5000)
        expect(await driver.findElement(By.className('popup-tip bad ember-view')).getText()).to.contains('Post must be at least 20 characters');
    });

    it('CP-39: Funcionalidad en el módulo de new topic', async () => {
        await sleep(2000)
        await driver.findElement(By.id('create-topic')).click();
        await sleep(3000)  
        await driver.findElement(By.id('reply-title')).clear();
        await sleep(4000)  
        await driver.findElement(By.id('reply-title')).sendKeys("1111 2222 3333 4444");
        await sleep(1000)
        await driver.findElement(By.className('d-editor-input ember-text-area ember-view')).sendKeys("prueba para el apartado post");
        await sleep(500)
        await driver.findElement(By.xpath("//span[text()='Create Topic']")).click();
        await sleep(5000)
        expect(await driver.findElement(By.className('modal-body')).getText()).to.equal('Title seems unclear, most of the words contain the same letters over and over?');
    });

    

    it('CP-40: Funcionalidad en el módulo de new topic', async () => {
        textoEjemplo = 'La programación es una de las principales y más importantes áreas dentro de la informática. Una buena definición de programador sería que este, especializado en la computación y que también es conocido como el desarrollador, es el encargado de desarrollar programas para computadora.'
        await sleep(2000)
        await driver.findElement(By.id('create-topic')).click();
        await sleep(3000)  
        await driver.findElement(By.id('reply-title')).clear();
        await sleep(4000)  
        await driver.findElement(By.id('reply-title')).sendKeys(textoEjemplo);
        await driver.findElement(By.className('d-editor-input ember-text-area ember-view')).clear();
        await sleep(1000)
        await driver.findElement(By.className('d-editor-input ember-text-area ember-view')).sendKeys("prueba para el apartado post");
        await sleep(500)
        await driver.findElement(By.xpath("//span[text()='Create Topic']")).click();
        await sleep(5000)
        expect(await driver.findElement(By.className('popup-tip bad ember-view')).getText()).to.contains("Title can\'t be more than 255 characters");
    });

    afterEach(async function () {
        await sleep(2000)
        await driver.quit()
    });

})  




