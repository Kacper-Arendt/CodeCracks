/// <reference types="cypress" />
import { generateRandomString } from 'web-utils';

describe('User can create an account', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3001');
	});

	it("user can't pass wrong formatted email field", () => {
		cy.get('input[name="email"]').type('Elon Musk');
		cy.get('input[name="password"]').type('programming-rocks');
		cy.get('button[type=submit]').click();
		cy.contains('Invalid email');
	});

	it("user can't register without password", () => {
		cy.get('input[name="email"]').type('admin@admin.com');
		cy.get('button[type=submit]').click();
		cy.contains('String must contain at least 6 character(s)');
	});

	it('user can register with email and password', () => {
		cy.get('input[name="email"]').type(`${generateRandomString()}@routines.com`);
		cy.get('input[name="password"]').type(generateRandomString());

		cy.get('button[type=submit]').click();

		cy.on('window:alert', (t) => {
			expect(t).to.contains('account created successfully');
		});
	});
});
