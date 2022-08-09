import { faker } from '@faker-js/faker';

//variables for the item page
const preBoardingModal='[data-qa=preBoardingModal]'
const closeModalBtn='[data-qa=preBoardingCloseBtn]'
const cartBtn='[id=cart-btn]'
const itemLbl='[data-qa=productCartTitle]'
const checkoutBtn='[data-qa=checkoutBtn]'
const emailDiscountTxt='input[placeholder="Enter email address"]'
const discountBanner='[data-qa=discountBanner]'
const discountLbl='#cartSidebar > div:nth-child(3) > div:nth-child(1) > div > div:nth-child(2) > div.Cart_cartPadding__1hmTN > div > div.Cart_totalsRow__2WJuw.totals__row > div.Cart_totalsLabel__9zJdW > div'

//variables for 'Create your account' section
const firstNameTxt='input[placeholder="First Name"]'
const lastNameTxt='input[placeholder="Last Name"]'
const emailTxt='input[placeholder="Email"]'
const passwordTxt='input[placeholder="Create a password"]'
const phoneNumberTxt='input[placeholder="Phone number"]'
const dateTxt='input[placeholder="Date of birth (DD/MM/YYYY)"]'
const agreeCheck='#CheckoutStep--ACCOUNT > div.CheckoutStep_CheckoutStep__body__2u6MJ > div > div.form.form--wrapper > div:nth-child(7) > label > span'

//variables for 'Shipping' section
const postCodeTxt='input[placeholder="Post Code"]'

const messageLbl='[data-qa=ThankYouOrderHeader]'

export let fakerEmail = faker.internet.email()
export let fakerName = faker.name.firstName()
export let fakerNumber = faker.phone.number()

describe('Case study Manual', () => {
  it('Place order with a 50% coupon', () => {
    cy.login()
  
    fakerEmail =  faker.internet.email()
    fakerName = faker.name.firstName()
    fakerNumber = faker.phone.number('#########')

    cy.get('h1').should('contain','Power Shampoo')
    cy.get(preBoardingModal).should('be.visible')
    cy.get(emailDiscountTxt).type(fakerEmail)
    cy.contains('Get 50% off').click()
    cy.get(discountBanner).should('be.visible')

    cy.contains('I accept').click()
    cy.contains('Choose your plan').click()
    cy.contains('One off').click()
    cy.xpath('//*[@id="HairProductsPanel"]/div[1]/div[5]/button').click()
    cy.get(cartBtn).click()
    cy.get('[id=cartSidebar]').should('be.visible')
    cy.get(itemLbl).should('contain','Power Shampoo')
    cy.get(discountLbl).should('contain', '50% OFF FIRST ORDER')
    cy.get(checkoutBtn).click()
 
    cy.contains('1. Create your account').should('be.visible')
    cy.get(firstNameTxt).type(fakerName)
    cy.get(lastNameTxt).type(fakerName)
    cy.get(emailTxt).type(fakerEmail)
    cy.get(passwordTxt).type('testassignment')
    cy.get(phoneNumberTxt).type(fakerNumber)
    cy.get(dateTxt).type('01011992')
    cy.get(agreeCheck).click()
    cy.contains('Create Account').click()

    cy.contains('2. Shipping').should('be.visible')
    cy.get(postCodeTxt).type('N1 7LQ')
    cy.contains('FIND ADDRESS').click()
    cy.contains('6-18 Underwood Row').click()
    cy.contains('Continue to payment').click()

    cy.contains('3. Payment method').should('be.visible')

    cy.creditCardPayment()

    cy.contains('Place order').click()
    cy.get(messageLbl).should('be.visible')

    //Verify the coupon is not valid anymore
    cy.login()

    cy.contains('Choose your plan').click()
    cy.contains('One off').click()
    cy.xpath('//*[@id="HairProductsPanel"]/div[1]/div[5]/button').click()
    cy.contains('This coupon is not valid').should('be.visible')

  })

  it('Place order without a coupon', () => {
    cy.login()
  
    fakerEmail =  faker.internet.email()

    cy.get('h1').should('contain','Power Shampoo')
    cy.get(preBoardingModal).should('be.visible')
    cy.get(closeModalBtn).click()
    cy.contains('I accept').click()
    cy.contains('Choose your plan').click()
    cy.contains('One off').click()
    cy.xpath('//*[@id="HairProductsPanel"]/div[1]/div[5]/button').click()
    cy.get(cartBtn).click()
    cy.get('[id=cartSidebar]').should('be.visible')
    cy.get(itemLbl).should('contain','Power Shampoo')
    cy.get(checkoutBtn).click()
 
    cy.contains('1. Create your account').should('be.visible')
    cy.get(firstNameTxt).type('Andrea')
    cy.get(lastNameTxt).type('Salguero')
    cy.get(emailTxt).type(fakerEmail)
    cy.get(passwordTxt).type('testassignment')
    cy.get(phoneNumberTxt).type('1234567890')
    cy.get(dateTxt).type('01011992')
    cy.get(agreeCheck).click()
    cy.contains('Create Account').click()

    cy.contains('2. Shipping').should('be.visible')
    cy.get(postCodeTxt).type('N1 7LQ')
    cy.contains('FIND ADDRESS').click()
    cy.contains('6-18 Underwood Row').click()
    cy.contains('Continue to payment').click()

    cy.contains('3. Payment method').should('be.visible')

    cy.creditCardPayment()

    cy.contains('Place order').click()
    cy.get(messageLbl).should('be.visible')
  })
})