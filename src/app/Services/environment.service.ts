import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Environment } from '../models/environment.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {

  baseAPIUrl: string = environment.baseAPIUrl //* envrionment for the API conntection string 

  constructor(private http: HttpClient ) { }

   getAllEnvironments(): Observable<Environment[]> {
    return this.http.get<Environment[]>(this.baseAPIUrl + '/api/environment') //* Get Responce 
   }

   addEnvironment(addEnvironmentRequest: Environment): Observable<Environment> {
    addEnvironmentRequest.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<Environment>(this.baseAPIUrl + '/api/environment', addEnvironmentRequest ) //* Post Responce 
   }

   getEnvironment(id: string): Observable<Environment> {
    return this.http.get<Environment>(this.baseAPIUrl + '/api/environment' + id  ) //* GET environment for responce 
   }

   updateEnvironment(id: string, updateEnvironmentRequest: Environment): Observable<Environment> {
    return this.http.put<Environment>(this.baseAPIUrl + '/api/environment' + id , updateEnvironmentRequest) //* update Responce 
   }

   deleteEnvironment(id: string): Observable<Environment> {
    return this.http.delete<Environment>(this.baseAPIUrl + '/api/environment' + id) //* Delete Responce 
   }

   changeStatus(id: string , changeStatus: number): Observable<Environment> {
    return this.http.patch<Environment>(`${this.baseAPIUrl}/api/environment/${id}/status`, changeStatus)//* chnage status responce 
   }


}
