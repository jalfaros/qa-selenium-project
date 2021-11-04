const { expect } = require('chai');
let { afterEach, beforeEach, it } = require('mocha');
let { Builder, By, Key, until } = require('selenium-webdriver');
const sleep = require('util').promisify(setTimeout);

const webdriver = require('selenium-webdriver')
require('selenium-webdriver/chrome')
require('chromedriver')


describe('Prueba en crear categoría, funcionalidad en el módulo de new Category', () => {

    const baseURL = 'http://192.168.3.69/';
    let driver;

    beforeEach(async () => {
        //driver = await new Builder().forBrowser('firefox').build(); // Se toma el explorador por defecto (Firefox, Google)
        driver = await new webdriver.Builder().forBrowser('firefox').build();
        await driver.get(baseURL); //Para abrir la instancia en la web automatizada

        await driver.findElement(By.xpath("//*[@id='ember7']/header/div/div/div[2]/span/button[2]/span")).click();
        await driver.findElement(By.id('login-account-name')).sendKeys("user");
        await driver.findElement(By.id('login-account-password')).sendKeys("yAHo8592ZgU6");
        await driver.findElement(By.id("login-button")).click();

        await sleep(5000);

        await driver.get("http://192.168.3.69/new-category");
    });

    it('TEST CP-46', async () => {

        await sleep(6000);
        await driver.findElement(By.className('category-name ember-text-field ember-view')).sendKeys('categoría1');
        await driver.findElement( By.xpath("//input[@placeholder='(Optional) dashed-words for url']") ).sendKeys('ficha2');
        await driver.findElement( By.xpath("//input[@placeholder='Any web color']") ).sendKeys('0fffff');
        await driver.findElement(By.id('save-category')).click(); 

        await sleep(6000);
        if( !driver.findElement(By.xpath("//span[text()='OK']") ).isDisplayed() ){
            expect( await driver.findElement( By.xpath("//h2[text()='Edit: categoría1']")).getText()).to.equal('Edit: categoría1');

        }else{
            expect( await driver.findElement( By.xpath("//span[text()='OK']") ).getText() ).to.equal('OK');
        }

    });
    

    it('TEST CP-47', async () => {

        await sleep(6000);
        await driver.findElement(By.className('category-name ember-text-field ember-view')).sendKeys('categoría56');
        await driver.findElement( By.xpath("//input[@placeholder='(Optional) dashed-words for url']") ).sendKeys('ficha2');
        await driver.findElement( By.xpath("//input[@placeholder='Any web color']") ).sendKeys('1');
        await driver.findElement(By.id('save-category')).click(); 

        await sleep(6000);
        if( !driver.findElement(By.xpath("//span[text()='OK']") ).isDisplayed() ){
            expect( await driver.findElement( By.xpath("//h2[text()='Edit: categoría56']")).getText()).to.equal('Edit: categoría56');

        }else{
            expect( await driver.findElement( By.xpath("//span[text()='OK']") ).getText() ).to.equal('OK');
        }

    });



    it('TEST CP-48', async () => {

    await sleep(6000);
    await driver.findElement(By.className('category-name ember-text-field ember-view')).sendKeys('categoría56666666666666666666666666666666666666666666666666666666666666666666666666');
    await driver.findElement( By.xpath("//input[@placeholder='(Optional) dashed-words for url']") ).sendKeys('ficha2');
    await driver.findElement( By.xpath("//input[@placeholder='Any web color']") ).sendKeys('0fffff');
    await driver.findElement(By.id('save-category')).click(); 

    await sleep(6000);
    if( !driver.findElement(By.xpath("//span[text()='OK']") ).isDisplayed() ){
        expect( await driver.findElement( By.xpath("//h2[text()='Edit: categoría56666666666666666666666666666666666666666666666666666666666666666666666666']")).getText()).to.equal('Edit: categoría56666666666666666666666666666666666666666666666666666666666666666666666666');

    }else{
        expect( await driver.findElement( By.xpath("//span[text()='OK']") ).getText() ).to.equal('OK');
    }

    });

    
    it('TEST CP-49', async () => {

        await sleep(6000);
        await driver.findElement(By.className('category-name ember-text-field ember-view')).sendKeys('categoría56666666666666666666666666666666666666666666666666666666666666666666666666');
        await driver.findElement( By.xpath("//input[@placeholder='(Optional) dashed-words for url']") ).sendKeys('ficha2');
        await driver.findElement( By.xpath("//input[@placeholder='Any web color']") ).sendKeys('#1');
        await driver.findElement(By.id('save-category')).click(); 

        await sleep(6000);
        if( !driver.findElement(By.xpath("//span[text()='OK']") ).isDisplayed() ){
            expect( await driver.findElement( By.xpath("//h2[text()='Edit: categoría56666666666666666666666666666666666666666666666666666666666666666666666666']")).getText()).to.equal('Edit: categoría56666666666666666666666666666666666666666666666666666666666666666666666666');

        }else{
            expect( await driver.findElement( By.xpath("//span[text()='OK']") ).getText() ).to.equal('OK');
        }

    });


    //Hay un error encontrado en esta prueba, permite crear una categoria al escribir un espacio
    it('TEST CP-50', async () => {

        await sleep(6000);
        await driver.findElement(By.className('category-name ember-text-field ember-view')).sendKeys('');
        await driver.findElement( By.xpath("//input[@placeholder='(Optional) dashed-words for url']") ).sendKeys('ficha2');
        await driver.findElement( By.xpath("//input[@placeholder='Any web color']") ).sendKeys('#0fffff');

        await sleep(4000);
        expect( await driver.findElement(By.id("save-category")).isEnabled() ).to.equal(false);

    });


    it('TEST CP-51', async () => {

        await sleep(6000);
        await driver.findElement(By.className('category-name ember-text-field ember-view')).sendKeys('');
        await driver.findElement( By.xpath("//input[@placeholder='(Optional) dashed-words for url']") ).sendKeys('ficha2');
        await driver.findElement( By.xpath("//input[@placeholder='Any web color']") ).sendKeys('#1');

        await sleep(4000);
        expect( await driver.findElement(By.id("save-category")).isEnabled() ).to.equal(false);

    });
   

    it('TEST CP-52', async () => {

        await sleep(6000);
        await driver.findElement(By.className('category-name ember-text-field ember-view')).sendKeys('categoría1');
        await driver.findElement( By.xpath("//input[@placeholder='(Optional) dashed-words for url']") ).sendKeys('');
        await driver.findElement( By.xpath("//input[@placeholder='Any web color']") ).sendKeys('#1');
        await driver.findElement(By.id('save-category')).click(); 

        await sleep(6000);
        if( !driver.findElement(By.xpath("//span[text()='OK']") ).isDisplayed() ){
            expect( await driver.findElement( By.xpath("//h2[text()='Edit: categoría1']")).getText()).to.equal('Edit: categoría1');

        }else{
            expect( await driver.findElement( By.xpath("//span[text()='OK']") ).getText() ).to.equal('OK');
        }

    });

    
    it('TEST CP-53', async () => {

        await sleep(6000);
        await driver.findElement(By.className('category-name ember-text-field ember-view')).sendKeys('categoría56666666666666666666666666666666666666666666666666666666666666666666666666');
        await driver.findElement( By.xpath("//input[@placeholder='(Optional) dashed-words for url']") ).sendKeys('');
        await driver.findElement( By.xpath("//input[@placeholder='Any web color']") ).sendKeys('#0fffff');
        await driver.findElement(By.id('save-category')).click(); 

        await sleep(6000);
        if( !driver.findElement(By.xpath("//span[text()='OK']") ).isDisplayed() ){
            expect( await driver.findElement( By.xpath("//h2[text()='Edit: categoría56666666666666666666666666666666666666666666666666666666666666666666666666']")).getText()).to.equal('Edit: categoría56666666666666666666666666666666666666666666666666666666666666666666666666');

        }else{
            expect( await driver.findElement( By.xpath("//span[text()='OK']") ).getText() ).to.equal('OK');
        }

    });


    it('TEST CP-54', async () => {

        await sleep(6000);
        await driver.findElement(By.className('category-name ember-text-field ember-view')).sendKeys('categoría56666666666666666666666666666666666666666666666666666666666666666666666666');
        await driver.findElement( By.xpath("//input[@placeholder='(Optional) dashed-words for url']") ).sendKeys('');
        await driver.findElement( By.xpath("//input[@placeholder='Any web color']") ).sendKeys('#1');
        await driver.findElement(By.id('save-category')).click(); 

        await sleep(6000);
        if( !driver.findElement(By.xpath("//span[text()='OK']") ).isDisplayed() ){
            expect( await driver.findElement( By.xpath("//h2[text()='Edit: categoría56666666666666666666666666666666666666666666666666666666666666666666666666']")).getText()).to.equal('Edit: categoría56666666666666666666666666666666666666666666666666666666666666666666666666');

        }else{
            expect( await driver.findElement( By.xpath("//span[text()='OK']") ).getText() ).to.equal('OK');
        }

    });

    
    it('TEST CP-55', async () => {
        
        await sleep(6000);
        await driver.findElement(By.className('category-name ember-text-field ember-view')).sendKeys('');
        await driver.findElement( By.xpath("//input[@placeholder='(Optional) dashed-words for url']") ).sendKeys('');
        await driver.findElement( By.xpath("//input[@placeholder='Any web color']") ).sendKeys('#0fffff');
        
        await sleep(4000);
        expect( await driver.findElement(By.id("save-category")).isEnabled() ).to.equal(false);
        
    });
    
    
    it('TEST CP-56', async () => {
        
        await sleep(6000);
        await driver.findElement(By.className('category-name ember-text-field ember-view')).sendKeys('');
        await driver.findElement( By.xpath("//input[@placeholder='(Optional) dashed-words for url']") ).sendKeys('ficha2');
        await driver.findElement( By.xpath("//input[@placeholder='Any web color']") ).sendKeys('#1');
        
        await sleep(4000);
        expect( await driver.findElement(By.id("save-category")).isEnabled() ).to.equal(false);
        
    });
    
    
    it('TEST CP-57', async () => {
        
        await sleep(6000);
        await driver.findElement(By.className('category-name ember-text-field ember-view')).sendKeys('categoría1');
        await driver.findElement( By.xpath("//input[@placeholder='(Optional) dashed-words for url']") ).sendKeys('fichaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaa');
        await driver.findElement( By.xpath("//input[@placeholder='Any web color']") ).sendKeys('#0fffff');
        await driver.findElement(By.id('save-category')).click(); 
        
        await sleep(6000);
        if( !driver.findElement(By.xpath("//span[text()='OK']") ).isDisplayed() ){
            expect( await driver.findElement( By.xpath("//h2[text()='Edit: categoría1']")).getText()).to.equal('Edit: categoría1');
            
        }else{
            expect( await driver.findElement( By.xpath("//span[text()='OK']") ).getText() ).to.equal('OK');
        }
        
    });
    
    
    it('TEST CP-58', async () => {
        
        await sleep(6000);
        await driver.findElement(By.className('category-name ember-text-field ember-view')).sendKeys('categoría1');
        await driver.findElement( By.xpath("//input[@placeholder='(Optional) dashed-words for url']") ).sendKeys('fichaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaa');
        await driver.findElement( By.xpath("//input[@placeholder='Any web color']") ).sendKeys('#1');
        await driver.findElement(By.id('save-category')).click(); 
        
        await sleep(6000);
        if( !driver.findElement(By.xpath("//span[text()='OK']") ).isDisplayed() ){
            expect( await driver.findElement( By.xpath("//h2[text()='Edit: categoría1']")).getText()).to.equal('Edit: categoría1');
            
        }else{
            expect( await driver.findElement( By.xpath("//span[text()='OK']") ).getText() ).to.equal('OK');
        }
        
    });

    
    
    it('TEST CP-59', async () => {
        
        await sleep(6000);
        await driver.findElement(By.className('category-name ember-text-field ember-view')).sendKeys('categoría111111111111111111111111111111111111111111111111111');
        await driver.findElement( By.xpath("//input[@placeholder='(Optional) dashed-words for url']") ).sendKeys('fichaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaa');
        await driver.findElement( By.xpath("//input[@placeholder='Any web color']") ).sendKeys('#0fffff');
        await driver.findElement(By.id('save-category')).click(); 
        
        await sleep(6000);
        if( !driver.findElement(By.xpath("//span[text()='OK']") ).isDisplayed() ){
            expect( await driver.findElement( By.xpath("//h2[text()='Edit: categoría111111111111111111111111111111111111111111111111111']")).getText()).to.equal('Edit: categoría111111111111111111111111111111111111111111111111111');
            
        }else{
            expect( await driver.findElement( By.xpath("//span[text()='OK']") ).getText() ).to.equal('OK');
        }
        
    });
   

    it('TEST CP-60', async () => {
        
        await sleep(6000);
        await driver.findElement(By.className('category-name ember-text-field ember-view')).sendKeys('categoría111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111');
        await driver.findElement( By.xpath("//input[@placeholder='(Optional) dashed-words for url']") ).sendKeys('fichaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaa');
        await driver.findElement( By.xpath("//input[@placeholder='Any web color']") ).sendKeys('#1');
        await driver.findElement(By.id('save-category')).click(); 
        
        await sleep(6000);
        if( !driver.findElement(By.xpath("//span[text()='OK']") ).isDisplayed() ){
            expect( await driver.findElement( By.xpath("//h2[text()='Edit: categoría111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111']")).getText()).to.equal('Edit: categoría111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111');
            
        }else{
            expect( await driver.findElement( By.xpath("//span[text()='OK']") ).getText() ).to.equal('OK');
        }
    });


    afterEach(async function () {
        await sleep(2000);
        await driver.quit()
      })


})  