import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertisseurPoidsComponent } from './convertisseur-poids.component';

describe('ConvertisseurPoidsComponent', () => {
  let component: ConvertisseurPoidsComponent;
  let fixture: ComponentFixture<ConvertisseurPoidsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConvertisseurPoidsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvertisseurPoidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
