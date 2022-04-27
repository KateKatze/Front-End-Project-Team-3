import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandscapephotosComponent } from './landscapephotos.component';

describe('LandscapephotosComponent', () => {
  let component: LandscapephotosComponent;
  let fixture: ComponentFixture<LandscapephotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandscapephotosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandscapephotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
