describe('Customer Bill', function(){
  beforeEach(function(){
    cy.server()
      .route('GET', /bill.json/, 'fixture:bill').as('bill')
      .visit('http://localhost:9999/')
      .get('.app-root')
  })

  context('When page is opened', function(){
    it('should contain customer bill title', function(){
      cy.contains('h1', 'Customer Bill')
    });

    it('should contain Statement Total title', function(){
      cy.contains('.statement', 'Statement Total')
    });

    it('should contain Statement Total amount', function(){
      cy.contains('.statement', '£136.03')
    });

  })

});