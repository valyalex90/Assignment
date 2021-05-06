describe('API Call', () => {

it('Should check APIs responses', function () {

    // GET messages and assert response body
    cy.requestURL('messages', 'GET')

    // GET users and assert response body
    cy.requestURL('users', 'GET')

    // POST a new id with a message body
    cy.postMsg('555/','mesaj/')
    

    // assert last element from response body, in order to see if the POST message worked correctly
    // cy.request({
    //     method: 'GET',
    //     url: 'https://pacific-taiga-76065.herokuapp.com/messages',
    //     headers: {'x-authentication-token': 'very-secrete-token'} 
    // }).then( (response) => {        
    //     // cy.wrap(response.body.messages[20]).should("contain", "mesaj");
    //     const arr_len = cy.wrap(response.body.messages).its('length')
    //     cy.wrap(response.body.messages).each(msg => {
    //         cy.wrap(msg.message).should('include','mesaj')
    //     });
    //     })


    // DELETE messages 
    cy.requestURL('clear', 'DELETE')
});
})