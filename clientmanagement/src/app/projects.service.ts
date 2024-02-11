import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Projects } from './projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private httpclient:HttpClient) { }

  private apiUrl = "http://localhost:3000/projects";
  
  showallprojectsdata():Observable<Projects[]>{
    return this.httpclient.get<Projects[]>(`${this.apiUrl}`);
  }

  addProjects(projects:Projects):Observable<Object>{
    return this.httpclient.post(`${this.apiUrl}`,projects);
  }
  /*
   getClientInfobasedOnClientId(id:any):Observable<Clients>{
    return this.httpclient.get<Clients>(`${this.apiUrl}/${id}`);
  }
  */
 getProjectInfoBasedOnProjectId(id:any):Observable<Projects>{
  return this.httpclient.get<Projects>(`${this.apiUrl}/${id}`);
}

getProjects(): Observable<any[]> {
  return this.httpclient.get<any[]>(this.apiUrl);
}
  
  
}
