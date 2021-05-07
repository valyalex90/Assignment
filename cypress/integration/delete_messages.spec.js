describe('API Call', () => {

    it('Should clear all messages', function () {

    // DELETE messages 
    cy.requestURL('clear', 'POST', 200)

});
})