import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeTipsComponent } from './resume-tips.component';

describe('ResumeTipsComponent', () => {
  let component: ResumeTipsComponent;
  let fixture: ComponentFixture<ResumeTipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumeTipsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResumeTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
