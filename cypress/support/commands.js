// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add(
    'iframeLoaded',
    {prevSubject: 'element'},
    ($iframe) => {
        const contentWindow = $iframe.prop('contentWindow');
        return new Promise(resolve => {
            if (
                contentWindow &&
                contentWindow.document.readyState === 'complete'
            ) {
                resolve(contentWindow)
            } else {
                $iframe.on('load', () => {
                    resolve(contentWindow)
                })
            }
        })
    });


Cypress.Commands.add(
    'getInDocument',
    {prevSubject: 'document'},
    (document, selector) => Cypress.$(selector, document)
);

Cypress.Commands.add(
    'getWithinIframe',
    (targetElement) => cy.get('iframe').iframeLoaded().its('document').getInDocument(targetElement)
);

Cypress.Commands.add('creditCardPayment', () => {
    cy.get('iframe')
    .eq(0)
    .iframeLoaded()
    .its('document')
    .getInDocument('[name="cardnumber"]')
    .type('4242424242424242');

    cy.get('iframe')
    .eq(1)
    .iframeLoaded()
    .its('document')
    .getInDocument('[name="exp-date"]')
    .type('0123');

    cy.get('iframe')
    .eq(2)
    .iframeLoaded()
    .its('document')
    .getInDocument('[name="cvc"]')
    .type('100');
})

Cypress.Commands.add('login', () => {
    cy.visit("https://www.devel.manual.co/hair-loss/power-shampoo", {
    headers: {
      authorization: 'Basic bWFudWFsOm1lbm9mbWFudWFs'
    },
    failOnStatusCode: false
    })
})