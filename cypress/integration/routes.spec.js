describe('API Call', () => {

it('Should GET messages and users & POST messages', function () {

    // GET messages and assert response body
    cy.requestURL('messages', 'GET', 200)

    // GET users and assert response body
    cy.requestURL('users', 'GET', 200)

    // POST a new id with a message body
    cy.postMsg('555/','mesaj/', 201)
    

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

});
})