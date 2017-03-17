import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { AdminComponent } from './admin.component';

describe('AdminComponent h1', () => {

	let comp:    AdminComponent;
	let fixture: ComponentFixture<AdminComponent>;
	let de:      DebugElement;
	let el:      HTMLElement;

	beforeEach(async( () => {
		
		TestBed.configureTestingModule({
			declarations: [ AdminComponent ], // declare the test component
			schemas: [ NO_ERRORS_SCHEMA ] 
		})
		.compileComponents() // compile template and css
		.then( () => {
			
			fixture = TestBed.createComponent(AdminComponent);
			comp = fixture.componentInstance; // AdminComponent test instance
			
			// query for the element <h1> by CSS element selector
			de = fixture.debugElement.query(By.css('h1'));
			el = de.nativeElement;
		});
		
	}));
	
	it('should display h1 text', () => {
		fixture.detectChanges();
		expect(el.innerText).toContain(comp.title);
	});

});

describe('AdminComponent nav', () => {

	let comp:    AdminComponent;
	let fixture: ComponentFixture<AdminComponent>;
	let de:      DebugElement;
	let el:      HTMLElement;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ AdminComponent ], // declare the test component
			schemas: [ NO_ERRORS_SCHEMA ] 
		})
		.compileComponents() // compile template and css
		.then( () => {
			
			fixture = TestBed.createComponent(AdminComponent);
			comp = fixture.componentInstance; // AdminComponent test instance
			
			// query for the element <nav ul li a> by CSS element selector
			de = fixture.debugElement.query(By.css('nav > ul > li > a'));
			el = de.nativeElement;
			
		});
		
	}));
	
	it('should display nav text', () => {
		fixture.detectChanges();
		expect(el.innerText).toMatch(/Users/i);
	});
  
});
