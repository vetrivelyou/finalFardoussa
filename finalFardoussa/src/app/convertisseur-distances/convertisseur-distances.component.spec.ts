import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertisseurDistancesComponent } from './convertisseur-distances.component';

describe('ConvertisseurDistancesComponent', () => {
  let component: ConvertisseurDistancesComponent;
  let fixture: ComponentFixture<ConvertisseurDistancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConvertisseurDistancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvertisseurDistancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
