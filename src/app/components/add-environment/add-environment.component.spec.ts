import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AddEnvironmentComponent } from './add-environment.component';
import { EnvironmentService } from 'src/app/Services/environment.service';
import { of } from 'rxjs';
import { Environment } from 'src/app/models/environment.model';

describe('AddEnvironmentComponent', () => {
  let component: AddEnvironmentComponent;
  let fixture: ComponentFixture<AddEnvironmentComponent>;
  let mockEnvironmentService: jasmine.SpyObj <EnvironmentService>;

  const mockEnvironment: Environment = {
    id: '123',
    status: 1,
    title: 'Test title ',
    name: 'test'
  };

  beforeEach(() => {
    mockEnvironmentService = jasmine.createSpyObj('EnvironmentService', ['addEnvironment']);
    mockEnvironmentService.addEnvironment.and.returnValue(of(mockEnvironment));

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AddEnvironmentComponent],
      providers: [
        { provide: EnvironmentService, useValue: mockEnvironmentService }
      ]
    });

    fixture = TestBed.createComponent(AddEnvironmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add an environment', () => {
    component.addEnvironmentRequest = { ...mockEnvironment };
    component.addEnvironment();

    expect(mockEnvironmentService.addEnvironment).toHaveBeenCalledWith(mockEnvironment);
  });

});

