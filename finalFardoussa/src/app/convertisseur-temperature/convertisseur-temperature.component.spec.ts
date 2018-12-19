import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertisseurTemperatureComponent } from './convertisseur-temperature.component';

describe('ConvertisseurTemperatureComponent', () => {
  let component: ConvertisseurTemperatureComponent;
  let fixture: ComponentFixture<ConvertisseurTemperatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConvertisseurTemperatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvertisseurTemperatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
