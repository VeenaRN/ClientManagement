import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tasks } from './tasks';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
//http://localhost:3000/Proj_tasks


  constructor(private httpclient:HttpClient) { }
  private apiUrl="http://localhost:3000/Proj_tasks";

  addTask(tasks:Tasks):Observable<Object>{
    return this.httpclient.post(`${this.apiUrl}`,tasks);
  }
  showallTasks():Observable<Tasks[]>{
    return this.httpclient.get<Tasks[]>(`${this.apiUrl}`);
  }
  // getTasksByProjectId(projectId: number): Observable<Tasks[]> {
  //   return this.httpclient.get<Tasks[]>(`${this.apiUrl}/tasks/${projectId}`);
  // }
}
