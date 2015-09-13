var calls = [
  { "called": "07716393769", "duration": "00:23:03", "cost": 2.13 },
  { "called": "07716393769", "duration": "00:23:03", "cost": 2.13 },
  { "called": "07716393769", "duration": "00:23:03", "cost": 2.13 },
  { "called": "07716393769", "duration": "00:23:03", "cost": 2.13 },
  { "called": "07716393769", "duration": "00:23:03", "cost": 2.13 },
  { "called": "07716393769", "duration": "00:23:03", "cost": 2.13 },
  { "called": "07716393769", "duration": "00:23:03", "cost": 2.13 },
  { "called": "07716393769", "duration": "00:23:03", "cost": 2.13 },
  { "called": "07716393769", "duration": "00:23:03", "cost": 2.13 },
  { "called": "07716393769", "duration": "00:23:03", "cost": 2.13 },
  { "called": "07716393769", "duration": "00:23:03", "cost": 2.13 },
  { "called": "07716393769", "duration": "00:23:03", "cost": 2.13 },
  { "called": "07716393769", "duration": "00:23:03", "cost": 2.13 },
  { "called": "07716393769", "duration": "00:23:03", "cost": 2.13 },
  { "called": "07716393769", "duration": "00:23:03", "cost": 2.13 },
  { "called": "07716393769", "duration": "00:23:03", "cost": 2.13 },
  { "called": "07716393769", "duration": "00:23:03", "cost": 2.13 },
  { "called": "07716393769", "duration": "00:23:03", "cost": 2.13 },
  { "called": "02074351359", "duration": "00:23:03", "cost": 2.13 },
  { "called": "02074351359", "duration": "00:23:03", "cost": 2.13 },
  { "called": "02074351359", "duration": "00:23:03", "cost": 2.13 },
  { "called": "02074351359", "duration": "00:23:03", "cost": 2.13 },
  { "called": "02074351359", "duration": "00:23:03", "cost": 2.13 },
  { "called": "02074351359", "duration": "00:23:03", "cost": 2.13 },
  { "called": "02074351359", "duration": "00:23:03", "cost": 2.13 },
  { "called": "02074351359", "duration": "00:23:03", "cost": 2.13 },
  { "called": "02074351359", "duration": "00:23:03", "cost": 2.13 },
  { "called": "02074351359", "duration": "00:23:03", "cost": 2.13 }
]

describe('Customer Bill', function(){
  beforeEach(function(){
    cy.server()
      .route('GET', /bill/, 'fixture:bill').as('bill')
      .visit('http://localhost:9999/')
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

    // waiting for cypress release to fix route watch in next few days
    // it('should contain stuff', function(){
    //   cy.get('.app-root').wait('@bill')
    // });
  })

  context('Packages', function(){
    it('should contain customer bill title', function(){
      cy.contains('h3', 'Packages')
    });

    it('should contain Statement Total title', function(){
      cy.contains('span', '£71.40')
    });
  })

  context('Call Charges', function(){
    it('should contain customer bill title', function(){
      cy.contains('h3', 'Call Charges')
    });

    it('should contain Statement Total title', function(){
      cy.contains('span', '£59.64')
    });

    it('should contain all the calls', function(){
      cy._.each(calls, function(call){
        cy.contains('td', call.called)
        cy.contains('td', call.duration)
        cy.contains('td', call.cost)
      })
    });
  })

  context('Sky Store', function(){
    it('should contain customer bill title', function(){
      cy.contains('h3', 'Sky Store')
    });

    it('should contain Statement Total title', function(){
      cy.contains('span', '£24.97')
    });

    // etc...
  })

});