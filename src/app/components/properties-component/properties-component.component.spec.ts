import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertiesComponentComponent } from './properties-component.component';

describe('PropertiesComponentComponent', () => {
  let component: PropertiesComponentComponent;
  let fixture: ComponentFixture<PropertiesComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropertiesComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertiesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
