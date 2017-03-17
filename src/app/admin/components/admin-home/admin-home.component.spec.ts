import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { AdminHomeComponent } from './admin-home.component';

describe('AdminHomeComponent h3', () => {

	let comp:    AdminHomeComponent;
	let fixture: ComponentFixture<AdminHomeComponent>;
	let de:      DebugElement;
	let el:      HTMLElement;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ AdminHomeComponent ], // declare the test component
			schemas: [ NO_ERRORS_SCHEMA ] 
		})
		.compileComponents() // compile template and css
		.then(() => {
			fixture = TestBed.createComponent(AdminHomeComponent);

			comp = fixture.componentInstance; // AdminHomeComponent test instance

			// query for the element <h3> by CSS element selector
			de = fixture.debugElement.query(By.css('h3'));
			el = de.nativeElement;
		});
		
	}));
	
  
	it('should display h3 text', () => {
		fixture.detectChanges();
		expect(el.innerText).toMatch(/Hello Admin/i);
	});

});
