import { AppComponent } from './app.component';
import { UserService } from '../services/user.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('AppComponent', function () {
  let de: DebugElement;
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
	  declarations: [ AppComponent ],
      providers: [ UserService ],
      schemas: [ NO_ERRORS_SCHEMA ] 
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('nav'));
  });

  it('should create component', () => expect(comp).toBeDefined() );

  it('should have expected nav text', () => {
    fixture.detectChanges();
    const nav = de.nativeElement;
    expect(nav.innerText).toMatch(/App/i,
      '<nav> should say something about "Home"');
  });
});
