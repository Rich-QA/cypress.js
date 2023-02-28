describe('Форма логина и пароля', function () {

    it('Правильный пароль, правильный логин', function () {
       cy.visit('https://login.qa.studio/');
       cy.get('#loginButton').should('be.disabled');

       cy.get('#mail').type('german@dolnikov.ru');
       cy.get('#loginButton').should('be.disabled');

       cy.get('#pass').type('iLoveqastudio1');
       cy.get('#loginButton').should('be.enabled');


       cy.get('#loginButton').click();
       cy.contains('Авторизация прошла успешно').should('be.visible');
       cy.get('#exitMessageButton > .exitIcon').should('be.visible');
       })

       it('Восстановление пароля', function () {
        cy.visit('https://login.qa.studio/');

        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('german@dolnikov.ru');
        cy.get('#restoreEmailButton').click();

        cy.contains('Успешно отправили пароль на e-mail').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').click();
        cy.contains('Форма логина').should('be.visible');
        }) 

       it('НЕправильный пароль, правильный логин', function () {
        cy.visit('https://login.qa.studio/');

        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio2');
        cy.get('#loginButton').click();

        cy.contains('Такого логина или пароля нет').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').click();
        cy.contains('Форма логина').should('be.visible');
        }) 

        it('Правильный пароль, НЕправильный логин', function () {
            cy.visit('https://login.qa.studio/');
    
            cy.get('#mail').type('german@dolnikovv.ru');
            cy.get('#pass').type('iLoveqastudio1');
            cy.get('#loginButton').click();
    
            cy.contains('Такого логина или пароля нет').should('be.visible');
            cy.get('#exitMessageButton > .exitIcon').should('be.visible');
            cy.get('#exitMessageButton > .exitIcon').click();
            cy.contains('Форма логина').should('be.visible');
            }) 

        it('Логин без @', function () {
            cy.visit('https://login.qa.studio/');
    
            cy.get('#mail').type('germandolnikov.ru');
            cy.get('#pass').type('iLoveqastudio1');
            cy.get('#loginButton').click();
    
            cy.contains('Нужно исправить проблему валидации').should('be.visible');
            cy.get('#exitMessageButton > .exitIcon').should('be.visible');
            })

            it('Регистрозависимость в поле логин ', function () {
                cy.visit('https://login.qa.studio/');
        
                cy.get('#mail').type('GerMan@Dolnikov.ru');
                cy.get('#pass').type('iLoveqastudio1');
                cy.get('#loginButton').click();
        
                cy.contains('Такого логина или пароля нет').should('be.visible');
                cy.get('#exitMessageButton > .exitIcon').should('be.visible');
                cy.get('#exitMessageButton > .exitIcon').click();
                cy.contains('Форма логина').should('be.visible');
                }) 
})