import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRegistrarComponent } from './modalregistrar.component';

describe('ModalregistrarComponent', () => {
  let component: ModalRegistrarComponent;
  let fixture: ComponentFixture<ModalRegistrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalRegistrarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalRegistrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
