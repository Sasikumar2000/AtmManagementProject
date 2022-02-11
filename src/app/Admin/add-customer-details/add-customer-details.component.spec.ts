import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCustomerDetailsComponent } from './add-customer-details.component';

describe('AddCustomerDetailsComponent', () => {
  let component: AddCustomerDetailsComponent;
  let fixture: ComponentFixture<AddCustomerDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCustomerDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCustomerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
