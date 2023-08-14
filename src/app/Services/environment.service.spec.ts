import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { EnvironmentService } from './environment.service';
import { Environment } from '../models/environment.model';

describe('EnvironmentService', () => {
  let service: EnvironmentService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EnvironmentService]
    });

    service = TestBed.inject(EnvironmentService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all environments', () => {
    const dummyEnvironments: Environment[] = [
        { id: '1', name: 'Env1', status: 0 , title:'test '}, 
        { id: '2', name: 'Env2', status: 0 , title: 'test' }];

    service.getAllEnvironments().subscribe(environments => {
      expect(environments.length).toBe(2);
      expect(environments).toEqual(dummyEnvironments);
    });

    const req = httpMock.expectOne(`${service.baseAPIUrl}/api/environment`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyEnvironments);
  });

  it('should add an environment', () => {
    const newEnvironment: Environment = {
        id: '3', 
        name: 'NewEnv',
        status: 0,
        title: 'Testing'
    };

    service.addEnvironment(newEnvironment).subscribe(environment => {
      expect(environment).toEqual(newEnvironment);
    });

    const req = httpMock.expectOne(`${service.baseAPIUrl}/api/environment`);
    expect(req.request.method).toBe('POST');
    req.flush(newEnvironment);
  });

  it('should get an environment by id', () => {
    const dummyEnvironment: Environment = {
        id: '1', 
        name: 'Env1',
        status: 0,
        title: 'Testing'
    };

    service.getEnvironment('1').subscribe(environment => {
      expect(environment).toEqual(dummyEnvironment);
    });

    const req = httpMock.expectOne(`${service.baseAPIUrl}/api/environment/1`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyEnvironment);
  });

  it('should update an environment', () => {
    const updatedEnvironment: Environment = {
        id: '1', 
        name: 'UpdatedEnv',
        status: 0,
        title: 'Testing'
    };

    service.updateEnvironment('1', updatedEnvironment).subscribe(environment => {
      expect(environment).toEqual(updatedEnvironment);
    });

    const req = httpMock.expectOne(`${service.baseAPIUrl}/api/environment/1`);
    expect(req.request.method).toBe('PUT');
    req.flush(updatedEnvironment);
  });

  it('should delete an environment', () => {
    const deletedEnvironment: Environment = {
        id: '1',
        name: 'DeletedEnv',
        status: 0,
        title: 'Testing'
    };

    service.deleteEnvironment('1').subscribe(environment => {
      expect(environment).toEqual(deletedEnvironment);
    });

    const req = httpMock.expectOne(`${service.baseAPIUrl}/api/environment/1`);
    expect(req.request.method).toBe('DELETE');
    req.flush(deletedEnvironment);
  });

  it('should change environment status', () => {
    const updatedEnvironment: Environment = {
        id: '1',
        name: 'Env1', 
        status: 1,
        title: 'Testing'
    };

    service.changeStatus('1', 1).subscribe(environment => {
      expect(environment).toEqual(updatedEnvironment);
    });

    const req = httpMock.expectOne(`${service.baseAPIUrl}/api/environment/1/status`);
    expect(req.request.method).toBe('PATCH');
    req.flush(updatedEnvironment);
  });

  
});
