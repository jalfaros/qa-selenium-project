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
/*it('Ejemplo de usuario sin errores en el registro de usuarios', async () => {

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

it('Mensaje de error en al contraseña digitada, debido a que es muy corta', async() =>{
    await driver.findElement(By.className('widget-button btn btn-primary btn-small sign-up-button btn-text')).click();
    // await driver.wait(until.titleContains('React'));
    await driver.findElement(By.name('email')).sendKeys('Warner3898@gmail.com');

    await driver.findElement(By.name('username')).sendKeys('buhito12345');

    await driver.findElement(By.id('new-account-name')).sendKeys('');

    await driver.findElement(By.id('new-account-password')).sendKeys('marcopass');

    expect(await driver.findElement(By.xpath("//div[text()='Your password is too short.']")).getText()).to.equal('Your password is too short.');
})

it('Mensaje de error en al contraseña digitada, debido a que no se registro ninguna contraseña', async() =>{
    await driver.findElement(By.className('widget-button btn btn-primary btn-small sign-up-button btn-text')).click();
    // await driver.wait(until.titleContains('React'));
    await driver.findElement(By.name('email')).sendKeys('Warner3898@gmail.com');

    await driver.findElement(By.name('username')).sendKeys('buhito12345');

    await driver.findElement(By.id('new-account-name')).sendKeys('');

    await driver.findElement(By.id('new-account-password')).sendKeys('');
    setTimeout(async() => {
        await driver.findElement(By.xpath("//span[text()='Create your account']")).click();
        expect(await driver.findElement(By.xpath("//div[text()='Please enter a password']")).getText()).to.equal('Please enter a password');
    }, 5000);
})

it('Mensaje de error en el correo digitado, debido a que no se registro ningun correo', async() =>{
    await driver.findElement(By.className('widget-button btn btn-primary btn-small sign-up-button btn-text')).click();
    // await driver.wait(until.titleContains('React'));
    await driver.findElement(By.name('email')).sendKeys('');

    await driver.findElement(By.name('username')).sendKeys('buhito123450');

    await driver.findElement(By.id('new-account-name')).sendKeys('');

    await driver.findElement(By.id('new-account-password')).sendKeys('123456test');
    setTimeout(async() => {
        await driver.findElement(By.xpath("//span[text()='Create your account']")).click();
        expect(await driver.findElement(By.xpath("//div[text()='Please enter an email address']")).getText()).to.equal('Please enter an email address');
    }, 5000);
})

it('Mensaje de error en el correo digitado y la contraseña, debido a que no se registro ningun correo y la contraseña es inválida', async() =>{
    await driver.findElement(By.className('widget-button btn btn-primary btn-small sign-up-button btn-text')).click();
    // await driver.wait(until.titleContains('React'));
    await driver.findElement(By.name('email')).sendKeys('');

    await driver.findElement(By.name('username')).sendKeys('buhito123450');

    await driver.findElement(By.id('new-account-name')).sendKeys('');

    await driver.findElement(By.id('new-account-password')).sendKeys('marcopass');
    setTimeout(async() => {
        await driver.findElement(By.xpath("//span[text()='Create your account']")).click();
        expect(await driver.findElement(By.xpath("//div[text()='Please enter an email address']")).getText()).to.equal('Please enter an email address');
    }, 5000);
})

it('Mensaje de error en el correo digitado y contraseña, debido a que no se registro ningun correo y tampoco ninguna contraseña', async() =>{
    await driver.findElement(By.className('widget-button btn btn-primary btn-small sign-up-button btn-text')).click();
    // await driver.wait(until.titleContains('React'));
    await driver.findElement(By.name('email')).sendKeys('');

    await driver.findElement(By.name('username')).sendKeys('buhito123450');

    await driver.findElement(By.id('new-account-name')).sendKeys('');

    await driver.findElement(By.id('new-account-password')).sendKeys('');
    setTimeout(async() => {
        await driver.findElement(By.xpath("//span[text()='Create your account']")).click();
        expect(await driver.findElement(By.xpath("//div[text()='Please enter an email address']")).getText()).to.equal('Please enter an email address');
    }, 5000);
})

it('Mensaje de error en el correo digitado, debido a que no se registro un formato válido para el correo', async() =>{
    await driver.findElement(By.className('widget-button btn btn-primary btn-small sign-up-button btn-text')).click();
    // await driver.wait(until.titleContains('React'));
    await driver.findElement(By.name('email')).sendKeys('warnerhurtado');

    await driver.findElement(By.name('username')).sendKeys('buhito123450');

    await driver.findElement(By.id('new-account-name')).sendKeys('warnerFidel');

    await driver.findElement(By.id('new-account-password')).sendKeys('marcopassword');
    setTimeout(async() => {
        await driver.findElement(By.xpath("//span[text()='Create your account']")).click();
        expect(await driver.findElement(By.xpath("//div[text()='Please enter a valid email address']")).getText()).to.equal('Please enter a valid email address');
    }, 5000);
})

it('Mensaje de error en el correo digitado y en la contraseña, debido a que no se registro un formato válido para el correo y la extensión de la contraseña es inválida', async() =>{
    await driver.findElement(By.className('widget-button btn btn-primary btn-small sign-up-button btn-text')).click();
    // await driver.wait(until.titleContains('React'));
    await driver.findElement(By.name('email')).sendKeys('warnerhurtado');

    await driver.findElement(By.name('username')).sendKeys('buhito123450');

    await driver.findElement(By.id('new-account-name')).sendKeys('warnerFidel');

    await driver.findElement(By.id('new-account-password')).sendKeys('marcopass');
    setTimeout(async() => {
        await driver.findElement(By.xpath("//span[text()='Create your account']")).click();
        expect(await driver.findElement(By.xpath("//div[text()='Please enter a valid email address']")).getText()).to.equal('Please enter a valid email address');
    }, 5000);
})


it('Mensaje de error en el correo digitado y en la contraseña, debido a que no se registro un formato válido para el correo y no se digitó la contraseña', async() =>{
    await driver.findElement(By.className('widget-button btn btn-primary btn-small sign-up-button btn-text')).click();
    // await driver.wait(until.titleContains('React'));
    await driver.findElement(By.name('email')).sendKeys('warnerhurtado');

    await driver.findElement(By.name('username')).sendKeys('buhito123450');

    await driver.findElement(By.id('new-account-name')).sendKeys('warnerFidel');

    await driver.findElement(By.id('new-account-password')).sendKeys('pass');
    setTimeout(async() => {
        await driver.findElement(By.xpath("//span[text()='Create your account']")).click();
        expect(await driver.findElement(By.xpath("//div[text()='Your password is too short.']")).getText()).to.equal('Your password is too short.');
    }, 5000);
})

it('Mensaje de error en el correo digitado, debido a que no se registro un formato válido para el correo', async() =>{
    await driver.findElement(By.className('widget-button btn btn-primary btn-small sign-up-button btn-text')).click();
    // await driver.wait(until.titleContains('React'));
    await driver.findElement(By.name('email')).sendKeys('correo');

    await driver.findElement(By.name('username')).sendKeys('buhito123456');

    await driver.findElement(By.id('new-account-name')).sendKeys('warnerFidel');

    await driver.findElement(By.id('new-account-password')).sendKeys('passwordcomplete');
    
    expect(await driver.findElement(By.xpath("//div[text()='Please enter a valid email address']")).getText()).to.equal('Please enter a valid email address');
})

it('Mensaje de error en el correo digitado y en la contraseña, debido a que no se registro un formato válido para el correo y no se digitó una contraseña válida', async() =>{
    await driver.findElement(By.className('widget-button btn btn-primary btn-small sign-up-button btn-text')).click();
    // await driver.wait(until.titleContains('React'));
    await driver.findElement(By.name('email')).sendKeys('correo');

    await driver.findElement(By.name('username')).sendKeys('buhito123456');

    await driver.findElement(By.id('new-account-name')).sendKeys('warnerFidel');

    await driver.findElement(By.id('new-account-password')).sendKeys('pass');
    
    expect(await driver.findElement(By.xpath("//div[text()='Please enter a valid email address']")).getText()).to.equal('Please enter a valid email address');
})

it('Mensaje de error en el correo digitado y en la contraseña, debido a que no se registro un formato válido para el correo y no se digitó una contraseña', async() =>{
    await driver.findElement(By.className('widget-button btn btn-primary btn-small sign-up-button btn-text')).click();
    // await driver.wait(until.titleContains('React'));
    await driver.findElement(By.name('email')).sendKeys('correo');

    await driver.findElement(By.name('username')).sendKeys('buhito123456');

    await driver.findElement(By.id('new-account-name')).sendKeys('warnerFidel');

    await driver.findElement(By.id('new-account-password')).sendKeys('');
    
    expect(await driver.findElement(By.xpath("//div[text()='Please enter a valid email address']")).getText()).to.equal('Please enter a valid email address');
})

it('Mensaje de error en el cusername, debido a que no se registro un username', async() =>{
    await driver.findElement(By.className('widget-button btn btn-primary btn-small sign-up-button btn-text')).click();
    // await driver.wait(until.titleContains('React'));
    await driver.findElement(By.name('email')).sendKeys('correo@correo.com');

    await driver.findElement(By.name('username')).sendKeys('');

    await driver.findElement(By.id('new-account-name')).sendKeys('warnerFidel');

    await driver.findElement(By.id('new-account-password')).sendKeys('passwordcorrect');
    
    setTimeout(async() => {
        await driver.findElement(By.xpath("//span[text()='Create your account']")).click();
        expect(await driver.findElement(By.xpath("//div[text()='Please enter a username]")).getText()).to.equal('Please enter a username');
    }, 5000);
})

it('Mensaje de error en el username, debido a que no se registro un username', async() =>{
    await driver.findElement(By.className('widget-button btn btn-primary btn-small sign-up-button btn-text')).click();
    // await driver.wait(until.titleContains('React'));
    await driver.findElement(By.name('email')).sendKeys('correo@correo.com');

    await driver.findElement(By.name('username')).sendKeys('');

    await driver.findElement(By.id('new-account-name')).sendKeys('warnerFidel');

    await driver.findElement(By.id('new-account-password')).sendKeys('passwordcorrect');
    
    setTimeout(async() => {
        await driver.findElement(By.xpath("//span[text()='Create your account']")).click();
        expect(await driver.findElement(By.xpath("//div[text()='Please enter a username]")).getText()).to.equal('Please enter a username');
    }, 5000);
})
it('Mensaje de error en el username, debido a que registró con caracteres especiales', async() =>{
    await driver.findElement(By.className('widget-button btn btn-primary btn-small sign-up-button btn-text')).click();
    // await driver.wait(until.titleContains('React'));
    await driver.findElement(By.name('email')).sendKeys('correo@correo.com');

    await driver.findElement(By.name('username')).sendKeys('hola + 2');

    await driver.findElement(By.id('new-account-name')).sendKeys('warnerFidel');

    await driver.findElement(By.id('new-account-password')).sendKeys('passwordcorrect');
    setTimeout(async() => {
        expect(await driver.findElement(By.id("username-validation")).getText()).to.equal('must only include numbers, letters, dashes, dots, and underscores');
    }, 2000);
})


it('Mensaje de error en el username y contraseña, debido a que registró el username con caracteres especiales y ninguna contraseña', async() =>{
    await driver.findElement(By.className('widget-button btn btn-primary btn-small sign-up-button btn-text')).click();
    // await driver.wait(until.titleContains('React'));
    await driver.findElement(By.name('email')).sendKeys('test@test.com');

    await driver.findElement(By.name('username')).sendKeys('hola + 2');

    await driver.findElement(By.id('new-account-name')).sendKeys('warnerFidel');

    await driver.findElement(By.id('new-account-password')).sendKeys('');
    await driver.findElement(By.xpath("//span[text()='Create your account']")).click();
    setTimeout(async() => {
        expect(await driver.findElement(By.id("username-validation")).getText()).to.equal('must only include numbers, letters, dashes, dots, and underscores');
    }, 2000);
})*/
})