import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnersComponentComponent } from './owners-component.component';

describe('OwnersComponentComponent', () => {
  let component: OwnersComponentComponent;
  let fixture: ComponentFixture<OwnersComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OwnersComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OwnersComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
