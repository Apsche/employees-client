import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankKiosksComponent } from './bank-kiosks.component';

describe('BankKiosksComponent', () => {
  let component: BankKiosksComponent;
  let fixture: ComponentFixture<BankKiosksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankKiosksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankKiosksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
