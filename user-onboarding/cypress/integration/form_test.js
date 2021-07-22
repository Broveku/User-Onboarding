const nameInput = () => cy.get('input[name="name"]')
const emailInput = () => cy.get('input[name="email"]')
const pwInput = () => cy.get('input[name="password"]')
const checkInput = () => cy.get('input[name="checkbox"]')
const submitBtn = () => cy.get('button[id="send"]')



describe('Quotes App',()=>{
   
     beforeEach(()=>{
        cy.visit('http://localhost:3000')
     })   
   

    it('check for right elements showing',()=>{
        nameInput().should('exist')
        emailInput().should('exist')
        pwInput().should('exist')
        checkInput().should('exist')
        submitBtn().should('exist')

    })
    
    it('check that text can be entered', ()=>{
        nameInput()
            .should('have.value','')
            .type('Jordan Gearheart')
            .should('have.value','Jordan Gearheart')

        emailInput()
            .should('have.value','')
            .type('jordan@jordan.com')
            .should('have.value','jordan@jordan.com')

        pwInput()
            .should('have.value','')
            .type('ThisFakePassword1234')
            .should('have.value','ThisFakePassword1234')

        checkInput()
            .should('have.value','false')
            .check()
            .should('have.value','true')

        submitBtn()
            .click()
    })

    it('check for form validation', ()=> {

        nameInput()
        .should('have.value','')
        .type('Jordan Gearheart')
        .clear()
        .should('have.value','')

    emailInput()
        .should('have.value','')
        .type('jordan@jordan.com')
        .clear()
        .should('have.value','')

    pwInput()
        .should('have.value','')
        .type('ThisFakePassword1234')
        .clear()
        .should('have.value','')

    checkInput()
        .should('have.value','false')
        .check()
        .uncheck()
        .should('have.value','false')

    
    })
        
    
    

    

})