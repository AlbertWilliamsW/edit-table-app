import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleProjectComponent } from './sample-project.component';

describe('SampleProjectComponent', () => {
  let component: SampleProjectComponent;
  let fixture: ComponentFixture<SampleProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampleProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
