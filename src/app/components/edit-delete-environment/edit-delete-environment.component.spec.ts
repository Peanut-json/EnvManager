import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDeleteEnvironmentComponent } from './edit-delete-environment.component';

describe('EditDeleteEnvironmentComponent', () => {
  let component: EditDeleteEnvironmentComponent;
  let fixture: ComponentFixture<EditDeleteEnvironmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditDeleteEnvironmentComponent]
    });
    fixture = TestBed.createComponent(EditDeleteEnvironmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
