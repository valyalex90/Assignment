import param from '../fixtures/test_params.json'

const number = Cypress._.random(1, 10000);
const textNumber = ('Engineer' + Cypress._.random(0, 1e9))
const searched_text = 'engineer'


describe('Cellebrite Website Search', () => {
    
    beforeEach(() => {
        cy.ignoreUncaughtException()
        cy.viewport(param.viewport)
        cy.visit('https://www.cellebrite.com/en/home/')
        cy.get('#CybotCookiebotDialogBodyButtonAccept').click()
    })

    it('Should search for a specific word', function () {
        cy.get('#h_search').click({force: true})
        cy.get('#h_search_input').type(searched_text)
        cy.get('#searchsubmit').click({force: true})
        cy.wait(500)
        cy.url().should('contain',searched_text)
        cy.get('.scl-h2').should('contain','engineer')

    })

    it('Should search for a specific word and click the first search result', function () {
        cy.get('#h_search').click({force: true})
        cy.get('#h_search_input').type(searched_text)
        cy.get('#searchsubmit').click({force: true})
        cy.wait(500)
        cy.url().should('contain',searched_text)
        cy.get('.scl-h2').should('contain','engineer')
        cy.get('.scl-item').first().click()
        cy.get('.nrc-aside-title').should('be.visible')

    })

    it('Should search for a specific word and random click on a search result', function () {
        cy.get('#h_search').click({force: true})
        cy.get('#h_search_input').type(searched_text)
        cy.get('#searchsubmit').click({force: true})
        cy.wait(500)
        cy.url().should('contain',searched_text)
        cy.get('.scl-h2').should('contain','engineer')
        cy.randomClickElemFromList('.scl-item')
        cy.get('.nrc-aside-title').should('be.visible')

    })

    
    it('Should search a random number', function () {
        cy.get('#h_search').click({force: true})
        cy.get('#h_search_input').type(number)
        cy.get('#searchsubmit').click({force: true})
        cy.url().should('contain',number)

    })

    it('Should search a random text number', function () {
        cy.get('#h_search').click({force: true})
        cy.get('#h_search_input').type(textNumber)
        cy.get('#searchsubmit').click({force: true})
        cy.url().should('contain',textNumber)

    })
})
