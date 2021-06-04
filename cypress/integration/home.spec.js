describe('Home Page', () => {
	beforeEach(() => {
		for (let index = 1; index <= 10; index++) {
			cy.request('GET', `https://jsonplaceholder.typicode.com/users/${index}`, {
				name: 'Jane',
				email: 'j@mail.com',
			})
				.its('body')
				.as(`currentUser${index}`);
		}
	});

	it('Complete the form and go to car information', function () {
		cy.visit('/');

		cy.get('[data-test-id="dni"]').type('44134852');
		cy.get('[data-test-id="phone"]').type('966528536');
		cy.get('[data-test-id="plate"]').type('COG607');
		cy.get('[data-test-id="tos"]').click();
		cy.get('[data-test-id="btn"]').click();

		cy.url().should('include', '/insurance-car/step-1');
	});

	it('Fill the form with bad data', function () {
		cy.visit('/');

		cy.get('[data-test-id="dni"]').type('4');
		cy.get('[data-test-id="dni"]').clear();
		cy.contains('Campo requerido de 8 dígitos');

		cy.get('[data-test-id="phone"]').type('9');
		cy.get('[data-test-id="phone"]').clear();
		cy.contains('Campo requerido de 9 dígitos');

		cy.get('[data-test-id="plate"]').type('COG505');
		cy.get('[data-test-id="plate"]').clear();
		cy.contains('Campo requerido de 6 dígitos');
	});
});
