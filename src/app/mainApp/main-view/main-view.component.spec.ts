import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainViewComponent } from './main-view.component';
import { EnvironmentService } from 'src/app/Services/environment.service';
import { of } from 'rxjs';


describe('MainViewComponent', () => {
  let component: MainViewComponent;
  let fixture: ComponentFixture<MainViewComponent>;
  let mockEnvironmentService: jasmine.SpyObj<EnvironmentService>;

  beforeEach(() => {
    mockEnvironmentService = jasmine.createSpyObj('EnvironmentService', ['getAllEnvironments', 'changeStatus']);
    
    TestBed.configureTestingModule({
      declarations: [MainViewComponent],
      providers: [
        { provide: EnvironmentService, useValue: mockEnvironmentService }
      ]
    });

    fixture = TestBed.createComponent(MainViewComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getAllEnvironments on ngOnInit and split environments', () => {
    const fakeEnvironments: any[] = [];
    mockEnvironmentService.getAllEnvironments.and.returnValue(of(fakeEnvironments));

    component.ngOnInit();

    expect(mockEnvironmentService.getAllEnvironments).toHaveBeenCalled();
    expect(component.environments[0].environments.length).toBe(2); // Available Environments
    expect(component.environments[1].environments.length).toBe(1); // Currently In-Use
    expect(component.environments[2].environments.length).toBe(0); // Unavailable
  });

});

