import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClrChartsComponent } from './clr-charts.component';

describe('ClrChartsComponent', () => {
  let component: ClrChartsComponent;
  let fixture: ComponentFixture<ClrChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClrChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClrChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
