import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortaitphotosComponent } from './portaitphotos.component';

describe('PortaitphotosComponent', () => {
  let component: PortaitphotosComponent;
  let fixture: ComponentFixture<PortaitphotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortaitphotosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortaitphotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
