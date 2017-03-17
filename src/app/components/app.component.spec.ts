import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { UserService } from '../services/user.service';

describe('AppComponent', function () {
	
	let comp: AppComponent;
	let fixture: ComponentFixture<AppComponent>;
	let de: DebugElement;
	let el: HTMLElement;
	
	let userServiceStub: any = {};
	userServiceStub.getCurrentUser = (): Promise<any> => {
		return new Promise( (resolve) => {
			let response = { loggedIn: true, user: {name: 'testuser', admin: true } };
			resolve(response);
		});
	}

 
	beforeEach(async(() => {

		TestBed.configureTestingModule({
			declarations: [ AppComponent ],
			providers:    [ {provide: UserService, useValue: userServiceStub} ],
			schemas: [ NO_ERRORS_SCHEMA ] 
		})
		.compileComponents()
		.then( () => {
			fixture = TestBed.createComponent(AppComponent);
			comp = fixture.componentInstance;
			let userService = fixture.debugElement.injector.get(UserService);
			de = fixture.debugElement.query(By.css('#brand'));
			el = de.nativeElement;
		});

	}));

	it('should create component', () => expect(comp).toBeDefined() );

	it('should display #brand text', () => expect(el.innerText).toMatch(/App/i) );
	
	it('sideMenuView should equal "profile" when user', async( () => {
		comp.getCurrentUser();
		fixture.detectChanges();
		
		fixture.whenStable().then(() => { // wait for async getCurrentUser
		  fixture.detectChanges();        // update view
		  comp.toggle_sideMenu();
		  fixture.detectChanges(); 
		  expect(comp.sideMenuView).toEqual('profile');
		});
		
	}));
	
	it('userlink should equal user name when user', async( () => {
		comp.getCurrentUser();
		fixture.detectChanges();
		
		fixture.whenStable().then(() => { // wait for async getCurrentUser
		  fixture.detectChanges();        // update view
		  expect(comp.userlink).toEqual('testuser');
		});
		
	}));
	
	it('admin should be true when user is admin', async( () => {
		comp.getCurrentUser();
		fixture.detectChanges();
		
		fixture.whenStable().then(() => { // wait for async getCurrentUser
		  fixture.detectChanges();        // update view
		  expect(comp.admin).toBe(true);
		});
		
	}));
	
});
