import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Clients } from './clients';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  //http://localhost:3000/clients

  constructor(private httpclient:HttpClient) { }

  private apiUrl = "http://localhost:3000/clients";

  addNewClient(clients:Clients):Observable<Object>{
    return this.httpclient.post(`${this.apiUrl}`,clients);
  }
  showallClients():Observable<Clients[]>{
    return this.httpclient.get<Clients[]>(`${this.apiUrl}`);
  }

  getClientInfobasedOnClientId(id:any):Observable<Clients>{
    return this.httpclient.get<Clients>(`${this.apiUrl}/${id}`);
  }

  updateClient(id:number,clients:Clients):Observable<object>{
    return this.httpclient.put(`${this.apiUrl}/${id}`,clients);
  }

  deleteClientBasedOnClientId(id:any):Observable<object>{
    return this.httpclient.delete(`${this.apiUrl}/${id}`);
  }
  getClients(): Observable<any[]> {
    return this.httpclient.get<any[]>(`${this.apiUrl}`);
  }

}


