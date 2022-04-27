import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DancingphotosComponent } from './dancingphotos.component';

describe('DancingphotosComponent', () => {
  let component: DancingphotosComponent;
  let fixture: ComponentFixture<DancingphotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DancingphotosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DancingphotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
