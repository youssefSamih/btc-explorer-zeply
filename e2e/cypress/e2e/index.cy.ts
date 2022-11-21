import { Selectors } from '../../selectors';

describe('Search for address', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should search for address and display the overview', () => {
    cy.get(Selectors.searchSelectors.searchInput).type(
      '1BwGf3z7n2fHk6NoVJNkV32qwyAYsMhkWf'
    );

    cy.get(Selectors.searchSelectors.submitSearch).click();

    cy.get(Selectors.addressSelectors.sel).should('be.visible');
  });
});

describe('Search for transaction', () => {
  beforeEach(() => {
    cy.visit('/transactions');
  });

  it('should search for transaction and display the overview', () => {
    cy.get(Selectors.searchSelectors.searchInput).type(
      'b6f6991d03df0e2e04dafffcd6bc418aac66049e2cd74b80f14ac86db1e3f0da'
    );

    cy.get(Selectors.searchSelectors.submitSearch).click();

    cy.get(Selectors.transactionSelectors.sel).should('be.visible');
  });
});
