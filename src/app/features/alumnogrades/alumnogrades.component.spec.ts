import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnogradesComponent } from './alumnogrades.component';

describe('AlumnogradesComponent', () => {
  let component: AlumnogradesComponent;
  let fixture: ComponentFixture<AlumnogradesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlumnogradesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumnogradesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
