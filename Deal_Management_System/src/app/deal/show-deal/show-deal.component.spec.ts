import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDealComponent } from './show-deal.component';

describe('ShowDealComponent', () => {
  let component: ShowDealComponent;
  let fixture: ComponentFixture<ShowDealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowDealComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowDealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
