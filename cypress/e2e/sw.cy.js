describe('empty spec', () => {
  it.only('searches SAN to SLC with dollars', () => {
    cy.visit('https://southwest.com')
    cy.get('#LandingAirBookingSearchForm_originationAirportCode').type('SAN').then(() => {
      cy.get('#LandingAirBookingSearchForm_originationAirportCode--item-0 > .actionable').click()
    })
    cy.get('#LandingAirBookingSearchForm_destinationAirportCode').type('SLC').then(() => {
      cy.get('#LandingAirBookingSearchForm_destinationAirportCode--item-0 > .actionable').click()
    })
    cy.get('#LandingAirBookingSearchForm_departureDate').type("12/21")
    cy.get('#LandingAirBookingSearchForm_returnDate').type("12/31")
    cy.get('#LandingAirBookingSearchForm_submit-button').click()
    cy.wait(2000)
    cy.get('#form-mixin--submit-button').click()
  })
})