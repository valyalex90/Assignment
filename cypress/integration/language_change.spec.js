import param from '../fixtures/test_params.json'

describe('Cellebrite Website Search', () => {

    beforeEach(() => {
        cy.ignoreUncaughtException()
        cy.viewport(param.viewport)
        cy.visit('https://www.cellebrite.com/en/home/')
        cy.get('#CybotCookiebotDialogBodyButtonAccept').click()
    })

it('Should change the language to FR', function () {
    cy.get('.l-list > .lang-item-fr span').click({force: true});
    cy.get('.l-curr span').should('contain','fr')
    cy.wait(500)
}
)

it('Should change the language to DE', function () {
    cy.get('.l-list > .lang-item-de span').click({force: true});
    cy.get('.l-curr span').should('contain','de')
    cy.wait(500)
}
)

it('Should change the language to ES', function () {
    cy.get('.l-list > .lang-item-es span').click({force: true});
    cy.get('.l-curr span').should('contain','es')
    cy.wait(500)
}
)

it('Should change the language to PT', function () {
    cy.get('.l-list > .lang-item-pt span').click({force: true});
    cy.get('.l-curr span').should('contain','pt')
    cy.wait(500)
}
)
})