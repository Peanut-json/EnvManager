import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { EditDeleteEnvironmentComponent } from './edit-delete-environment.component';
import { EnvironmentService } from 'src/app/Services/environment.service';
import { Environment } from 'src/app/models/environment.model';

describe('EditDeleteEnvironmentComponent', () => {
  let component: EditDeleteEnvironmentComponent;
  let fixture: ComponentFixture<EditDeleteEnvironmentComponent>;
  let mockActivatedRoute;
  let mockEnvironmentService: { getEnvironment: { and: { returnValue: (arg0: Observable<{ id: string; status: number; title: string; name: string; }>) => void; }; }; updateEnvironment: { and: { returnValue: (arg0: Observable<{}>) => void; }; }; deleteEnvironment: { and: { returnValue: (arg0: Observable<{}>) => void; }; }; };
  let mockRouter: { navigate: any; };

  beforeEach(() => {
    mockActivatedRoute = {
      paramMap: of({ get: (key: any) => '1' }) // Simulating paramMap observable
    };

    mockEnvironmentService = jasmine.createSpyObj('EnvironmentService', ['getEnvironment', 'updateEnvironment', 'deleteEnvironment']);
    mockEnvironmentService.getEnvironment.and.returnValue(of({ id: '1', status: 1, title: 'Test Title', name: 'Test Name' }));
    mockEnvironmentService.updateEnvironment.and.returnValue(of({}));
    mockEnvironmentService.deleteEnvironment.and.returnValue(of({}));

    mockRouter = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      declarations: [EditDeleteEnvironmentComponent],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: EnvironmentService, useValue: mockEnvironmentService },
        { provide: Router, useValue: mockRouter }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(EditDeleteEnvironmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should retrieve environment details on component initialization', () => {
    expect(component.environmentDetails.id).toBe('1');
    expect(component.environmentDetails.title).toBe('Test Title');
    expect(component.environmentDetails.name).toBe('Test Name');
  });

  it('should update environment and navigate to Environments', () => {
    component.updateEnvironment();
    expect(mockEnvironmentService.updateEnvironment).toHaveBeenCalledWith('1', component.environmentDetails);
    expect(mockRouter.navigate).toHaveBeenCalledWith(['Environments']);
  });

  it('should delete environment and navigate to Environments', () => {
    component.deleteEnvironment('1');
    expect(mockEnvironmentService.deleteEnvironment).toHaveBeenCalledWith('1');
    expect(mockRouter.navigate).toHaveBeenCalledWith(['Environments']);
  });
});
