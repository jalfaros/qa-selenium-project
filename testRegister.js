const { expect } = require('chai');
let { afterEach, beforeEach, it } = require('mocha');
let { Builder, By, Key, until } = require('selenium-webdriver');
require('chromedriver');
const sleep = require('util').promisify(setTimeout)


//describe que contiene pruebas para el apartado de new topic
describe('Pruebas automatizadas Registro de Usuarios', () => {

    const baseURL = 'http://192.168.3.69';
    let driver;

    beforeEach(async () => {
        driver = await new Builder().forBrowser('firefox').build(); // Se toma el explorador por defecto (Firefox, Google)
        await driver.get(baseURL); //Para abrir la instancia en la web automatizada

    });

    afterEach(  async() => {
        await sleep(2000)
        await  driver.quit();  
    })
//Funcionalidad de modulo de registro

it('CP-16: Register Test', async () => {

    await driver.findElement(By.className('widget-button btn btn-primary btn-small sign-up-button btn-text')).click();

    await driver.findElement(By.name('email')).sendKeys('Warner3812@gmail.com');

    await driver.findElement(By.name('username')).sendKeys('buhitousername2');

    await driver.findElement(By.id('new-account-name')).sendKeys('Warner Hurtado Laguna');

    await driver.findElement(By.id('new-account-password')).sendKeys('quesito123');
    await sleep(1000)
    await driver.findElement(By.xpath("//span[text()='Create your account']")).click();
    await sleep(9000);
    expect(await driver.findElement(By.xpath("//p[text()='If it doesn’t arrive, check your spam folder.']")).getText()).to.equal('If it doesn’t arrive, check your spam folder.');
});

it('CP-17: Register Test', async() =>{
    await driver.findElement(By.className('widget-button btn btn-primary btn-small sign-up-button btn-text')).click();

    await driver.findElement(By.name('email')).sendKeys('Warner3894@gmail.com');

    await driver.findElement(By.name('username')).sendKeys('buhito123450201');

    await driver.findElement(By.id('new-account-name')).sendKeys('');

    await driver.findElement(By.id('new-account-password')).sendKeys('marcopass'); 
    await sleep(1000)
    expect(await driver.findElement(By.xpath("//div[text()='Your password is too short.']")).getText()).to.equal('Your password is too short.');
})

it('CP-18: Register Test', async() =>{
    await driver.findElement(By.className('widget-button btn btn-primary btn-small sign-up-button btn-text')).click();

    await driver.findElement(By.name('email')).sendKeys('Warner3898123121@gmail.com');

    await driver.findElement(By.name('username')).sendKeys('buhito1234512341');

    await driver.findElement(By.id('new-account-name')).sendKeys('');

    await driver.findElement(By.id('new-account-password')).sendKeys('');
        await sleep(4000);
        await driver.findElement(By.xpath("//span[text()='Create your account']")).click();
        await sleep(3000);
        expect(await driver.findElement(By.xpath("//div[text()='Please enter a password']")).getText()).to.equal('Please enter a password');
   
})

it('CP-19: Register Test', async() =>{
    await driver.findElement(By.className('widget-button btn btn-primary btn-small sign-up-button btn-text')).click();

    await driver.findElement(By.name('email')).sendKeys('');

    await driver.findElement(By.name('username')).sendKeys('buhito12345012131');

    await driver.findElement(By.id('new-account-name')).sendKeys('');

    await driver.findElement(By.id('new-account-password')).sendKeys('123456test');
    await sleep(1000);
    await driver.findElement(By.xpath("//span[text()='Create your account']")).click();
    await sleep(2000);
    expect(await driver.findElement(By.xpath("//div[text()='Please enter an email address']")).getText()).to.equal('Please enter an email address');
  
})

it('CP-20: Register Test', async() =>{
    await driver.findElement(By.className('widget-button btn btn-primary btn-small sign-up-button btn-text')).click();

    await driver.findElement(By.name('email')).sendKeys('');

    await driver.findElement(By.name('username')).sendKeys('buhito1234501231231');

    await driver.findElement(By.id('new-account-name')).sendKeys('');

    await driver.findElement(By.id('new-account-password')).sendKeys('marcopass');
    await sleep(1000);
    await driver.findElement(By.xpath("//span[text()='Create your account']")).click();
    await sleep(2000);
    expect(await driver.findElement(By.xpath("//div[text()='Please enter an email address']")).getText()).to.equal('Please enter an email address');
   
})

it('CP-21: Register Test', async() =>{
    await driver.findElement(By.className('widget-button btn btn-primary btn-small sign-up-button btn-text')).click();
    await driver.findElement(By.name('email')).sendKeys('');

    await driver.findElement(By.name('username')).sendKeys('buhito12345078981');

    await driver.findElement(By.id('new-account-name')).sendKeys('');

    await driver.findElement(By.id('new-account-password')).sendKeys('');
    await sleep(1000);
    await driver.findElement(By.xpath("//span[text()='Create your account']")).click();
    await sleep(2000);
    expect(await driver.findElement(By.xpath("//div[text()='Please enter an email address']")).getText()).to.equal('Please enter an email address');
   
})

it('CP-22: Register Test', async() =>{
    await driver.findElement(By.className('widget-button btn btn-primary btn-small sign-up-button btn-text')).click();

    await driver.findElement(By.name('email')).sendKeys('warnerhurtado');

    await driver.findElement(By.name('username')).sendKeys('buhito1234512651');

    await driver.findElement(By.id('new-account-name')).sendKeys('warnerFidel');

    await driver.findElement(By.id('new-account-password')).sendKeys('marcopassword');
    await sleep(1000);
        await driver.findElement(By.xpath("//span[text()='Create your account']")).click();
        await sleep(2000);
        expect(await driver.findElement(By.xpath("//div[text()='Please enter a valid email address']")).getText()).to.equal('Please enter a valid email address');
  
})

it('CP-23: Register Test', async() =>{
    await driver.findElement(By.className('widget-button btn btn-primary btn-small sign-up-button btn-text')).click();

    await driver.findElement(By.name('email')).sendKeys('warnerhurtado');

    await driver.findElement(By.name('username')).sendKeys('buhito12345052121');

    await driver.findElement(By.id('new-account-name')).sendKeys('warnerFidel');

    await driver.findElement(By.id('new-account-password')).sendKeys('marcopass');
    await sleep(1000);
        await driver.findElement(By.xpath("//span[text()='Create your account']")).click();
        await sleep(2000);
        expect(await driver.findElement(By.xpath("//div[text()='Please enter a valid email address']")).getText()).to.equal('Please enter a valid email address');
   
})


it('CP-24: Register Test', async() =>{
    await driver.findElement(By.className('widget-button btn btn-primary btn-small sign-up-button btn-text')).click();
    
    await driver.findElement(By.name('email')).sendKeys('warnerhurtado');

    await driver.findElement(By.name('username')).sendKeys('buhito1234502468011');

    await driver.findElement(By.id('new-account-name')).sendKeys('warnerFidel');

    await driver.findElement(By.id('new-account-password')).sendKeys('pass');
    await sleep(1000);
        await driver.findElement(By.xpath("//span[text()='Create your account']")).click();
        await sleep(2000);
        expect(await driver.findElement(By.xpath("//div[text()='Your password is too short.']")).getText()).to.equal('Your password is too short.');
  
})

it('CP-25: Register Test', async() =>{
    await driver.findElement(By.className('widget-button btn btn-primary btn-small sign-up-button btn-text')).click();

    await driver.findElement(By.name('email')).sendKeys('correo');

    await driver.findElement(By.name('username')).sendKeys('buhito12345625341');

    await driver.findElement(By.id('new-account-name')).sendKeys('warnerFidel');

    await driver.findElement(By.id('new-account-password')).sendKeys('passwordcomplete');
    await sleep(1000);
    expect(await driver.findElement(By.xpath("//div[text()='Please enter a valid email address']")).getText()).to.equal('Please enter a valid email address');
})

it('CP-26: Register Test', async() =>{
    await driver.findElement(By.className('widget-button btn btn-primary btn-small sign-up-button btn-text')).click();

    await driver.findElement(By.name('email')).sendKeys('correo');

    await driver.findElement(By.name('username')).sendKeys('buhito123456978901');

    await driver.findElement(By.id('new-account-name')).sendKeys('warnerFidel');

    await driver.findElement(By.id('new-account-password')).sendKeys('pass');
    await sleep(1000);
    
    expect(await driver.findElement(By.xpath("//div[text()='Please enter a valid email address']")).getText()).to.equal('Please enter a valid email address');
})

it('CP-27: Register Test', async() =>{
    await driver.findElement(By.className('widget-button btn btn-primary btn-small sign-up-button btn-text')).click();

    await driver.findElement(By.name('email')).sendKeys('correo');

    await driver.findElement(By.name('username')).sendKeys('buhito12345603154961');

    await driver.findElement(By.id('new-account-name')).sendKeys('warnerFidel');

    await driver.findElement(By.id('new-account-password')).sendKeys('');
    await sleep(1000);
    
    expect(await driver.findElement(By.xpath("//div[text()='Please enter a valid email address']")).getText()).to.equal('Please enter a valid email address');
})

it('CP-28: Register Test', async() =>{
    await driver.findElement(By.className('widget-button btn btn-primary btn-small sign-up-button btn-text')).click();

    await driver.findElement(By.name('email')).sendKeys('correo12@correo.com');

    await driver.findElement(By.name('username')).sendKeys('');

    await driver.findElement(By.id('new-account-name')).sendKeys('warnerFidel');

    await driver.findElement(By.id('new-account-password')).sendKeys('passwordcorrect');
    
        await sleep(2000);
        await driver.findElement(By.xpath("//span[text()='Create your account']")).click();
        await sleep(3000);
        expect(await driver.findElement(By.className('alert alert-error')).getText()).to.equal('Please enter a username');
    
})
it('CP-29: Register Test', async() =>{
    await driver.findElement(By.className('widget-button btn btn-primary btn-small sign-up-button btn-text')).click();

    await driver.findElement(By.name('email')).sendKeys('correo35@correo.com');

    await driver.findElement(By.name('username')).sendKeys('hola + 2');

    await driver.findElement(By.id('new-account-name')).sendKeys('warnerFidel');

    await driver.findElement(By.id('new-account-password')).sendKeys('passwordcorrect');
    await sleep(8000);
        expect(await driver.findElement(By.id("username-validation")).getText()).to.equal('must only include numbers, letters, dashes, dots, and underscores');
    
})


it('CP-30: Register Test', async() =>{
    await driver.findElement(By.className('widget-button btn btn-primary btn-small sign-up-button btn-text')).click();
    // await driver.wait(until.titleContains('React'));
    await driver.findElement(By.name('email')).sendKeys('test12@test35.com');

    await driver.findElement(By.name('username')).sendKeys('hola + 2');

    await driver.findElement(By.id('new-account-name')).sendKeys('warnerFidel');

    await driver.findElement(By.id('new-account-password')).sendKeys('');
    await sleep(1000);
    await driver.findElement(By.xpath("//span[text()='Create your account']")).click();
    await sleep(8000);
        expect(await driver.findElement(By.id("username-validation")).getText()).to.equal('must only include numbers, letters, dashes, dots, and underscores');
    
})
})