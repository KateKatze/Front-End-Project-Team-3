import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchitecturephotosComponent } from './architecturephotos.component';

describe('ArchitecturephotosComponent', () => {
  let component: ArchitecturephotosComponent;
  let fixture: ComponentFixture<ArchitecturephotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchitecturephotosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchitecturephotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
