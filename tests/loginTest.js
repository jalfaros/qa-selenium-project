const { expect } = require('chai');
let { afterEach, beforeEach, it } = require('mocha');
let { Builder, By, until } = require('selenium-webdriver');
const sleep = require('util').promisify(setTimeout);

async function  loginAutomatic ( driver, user, password ) {
    await driver.wait(until.titleContains('Discourse'));
    await driver.findElement(By.className('widget-button btn btn-primary btn-small login-button btn-icon-text')).click();
    await driver.findElement( By.id("login-account-name") ).sendKeys(user);
    await driver.findElement( By.id("login-account-password") ).sendKeys(password);

};


async function modalChecker( driver ){
    const modalMessageLocator = await driver.findElement( By.id("modal-alert") );
    if( await modalMessageLocator.isDisplayed() ){
        return true;
    }

    return false;
}




describe('Testing login functionality Discourse Main Page CP-01 -> CP-15', () => {

    const baseURL = 'http://192.168.0.104';
    let driver;

    beforeEach( async () => {
        driver = await new Builder().forBrowser('firefox').build();
        await driver.get( baseURL );
    });

    afterEach( () => {
        setTimeout(() => {
           driver.quit(); 
        }, 2000);
    }); 


    it('CP-01 Login Test', async () => { 


        await driver.findElement(By.className('widget-button btn btn-primary btn-small login-button btn-icon-text')).click();
        await driver.findElement( By.id("login-account-name") ).sendKeys("user");
        await driver.findElement( By.id("login-account-password") ).sendKeys("HwwgTr1NwHI1");
        await driver.findElement( By.id("login-button") ).click();
        await sleep(5000);
        if( await driver.findElement( By.id("create-topic") ).isDisplayed() ){
            expect( await driver.findElement( By.id("create-topic") ).isDisplayed() ).to.equal(true);         
        }
        
        
            

    });

    it('CP-02 Login Test', async () => { 


        
        await driver.wait(until.titleContains('Discourse'));
        await driver.findElement(By.className('widget-button btn btn-primary btn-small login-button btn-icon-text')).click();
        await driver.findElement( By.id("login-account-name") ).sendKeys("user");
        await driver.findElement( By.id("login-account-password") ).sendKeys("marcopass");
        await driver.findElement( By.id("login-button") ).click();
        await sleep(3000);
        const modalMessageLocator = await driver.findElement( By.id("modal-alert") );
        if( await modalMessageLocator.isDisplayed() ){
            expect( await driver.findElement(By.id("modal-alert")).getText() ).to.equal("Incorrect username, email or password");
        }

       
            
    });


    it('CP-03 Login Test', async () =>{

        
        await loginAutomatic( driver, 'user', '' );
        await sleep(1000);
        await driver.findElement( By.id("login-button") ).click();
        await sleep(3000)
        if ( await modalChecker(driver) ){
            expect( await driver.findElement(By.id("modal-alert")).getText() ).to.equal("Please enter your email or username, and password.");
        }
        
    })

    it('CP-04 Login Test', async () =>{

    
        await loginAutomatic( driver, 'Jalfaros', '123456test' );
        await sleep(1000);
        await driver.findElement( By.id("login-button") ).click();
        await sleep(3000)
        if ( await modalChecker(driver) ){
            expect( await driver.findElement(By.id("modal-alert")).getText() ).to.equal("Incorrect username, email or password");
        }
    
    })


    it('CP-05 Login Test', async () =>{

        await loginAutomatic( driver, 'Jalfaros', 'marcopass')
        await sleep(1000);
        await driver.findElement( By.id("login-button") ).click();
        await sleep(3000);
        if ( await modalChecker(driver) ){
            expect( await driver.findElement(By.id("modal-alert")).getText() ).to.equal("Incorrect username, email or password");
        }
    });

    it('CP-06 Login Test', async () =>{

        await loginAutomatic( driver, 'Jalfaros', '')
        await sleep(1000);
        await driver.findElement( By.id("login-button") ).click();
        await sleep(3000);
        if ( await modalChecker(driver) ){
            expect( await driver.findElement(By.id("modal-alert")).getText() ).to.equal("Please enter your email or username, and password.");
        }
    });
    
    it('CP-07 Login Test', async () =>{

        await loginAutomatic( driver, '12345', '123456test')
        await sleep(1000);
        await driver.findElement( By.id("login-button") ).click();
        await sleep(3000);
        if ( await modalChecker(driver) ){
            expect( await driver.findElement(By.id("modal-alert")).getText() ).to.equal("Incorrect username, email or password");
        }
    });

    it('CP-08 Login Test', async () =>{

        await loginAutomatic( driver, '12345', 'marcopass')
        await sleep(1000);
        await driver.findElement( By.id("login-button") ).click();
        await sleep(3000);
        if ( await modalChecker(driver) ){
            expect( await driver.findElement(By.id("modal-alert")).getText() ).to.equal("Incorrect username, email or password");
        }
    });


    it('CP-09 Login Test', async () =>{

        await loginAutomatic( driver, '12345', '')
        await sleep(1000);
        await driver.findElement( By.id("login-button") ).click();
        await sleep(3000);
        if ( await modalChecker(driver) ){
            expect( await driver.findElement(By.id("modal-alert")).getText() ).to.equal("Please enter your email or username, and password.");
        }
    });
    
    it('CP-10 Login Test', async () =>{

        await loginAutomatic( driver, 'correo', '123456test')
        await sleep(1000);
        await driver.findElement( By.id("login-button") ).click();
        await sleep(3000);
        if ( await modalChecker(driver) ){
            expect( await driver.findElement(By.id("modal-alert")).getText() ).to.equal("Incorrect username, email or password");
        }
    });


    it('CP-11 Login Test', async () =>{

        await loginAutomatic( driver, 'correo', 'marcopass')
        await sleep(1000);
        await driver.findElement( By.id("login-button") ).click();
        await sleep(3000);
        if ( await modalChecker(driver) ){
            expect( await driver.findElement(By.id("modal-alert")).getText() ).to.equal("Incorrect username, email or password");
        }
    });


    it('CP-12 Login Test', async () =>{

        await loginAutomatic( driver, 'correo', 'marcopass')
        await sleep(1000);
        await driver.findElement( By.id("login-button") ).click();
        await sleep(3000);
        if ( await modalChecker(driver) ){
            expect( await driver.findElement(By.id("modal-alert")).getText() ).to.equal("Incorrect username, email or password");
        }
    });


    it('CP-13 Login Test', async () =>{

        await loginAutomatic( driver, 'correo@correo.com', '123456test')
        await sleep(1000);
        await driver.findElement( By.id("login-button") ).click();
        await sleep(3000);
        if ( await modalChecker(driver) ){
            expect( await driver.findElement(By.id("modal-alert")).getText() ).to.equal("Incorrect username, email or password");
        }
    });

    it('CP-14 Login Test', async () =>{

        await loginAutomatic( driver, '2 + hola', 'marcopass')
        await sleep(1000);
        await driver.findElement( By.id("login-button") ).click();
        await sleep(3000);
        if ( await modalChecker(driver) ){
            expect( await driver.findElement(By.id("modal-alert")).getText() ).to.equal("Incorrect username, email or password");
        }
    });


    it('CP-15 Login Test', async () =>{

        await loginAutomatic( driver, '2 + hola', '')
        await sleep(1000);
        await driver.findElement( By.id("login-button") ).click();
        await sleep(3000);
        if ( await modalChecker(driver) ){
            expect( await driver.findElement(By.id("modal-alert")).getText() ).to.equal("Please enter your email or username, and password.");
        }
    });






});