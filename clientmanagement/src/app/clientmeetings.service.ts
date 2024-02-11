import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Clientmeetings } from './clientmeetings';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientmeetingsService {

  constructor(private httpclient:HttpClient) { }
   private apiUrl="http://localhost:3000/clientmeetings";

   showallMeetings():Observable<Clientmeetings[]>{
    return this.httpclient.get<Clientmeetings[]>(`${this.apiUrl}`);
   }

   addMeeting(clientmeetings:Clientmeetings):Observable<Object>{
   return this.httpclient.post(`${this.apiUrl}`,clientmeetings);
   }
}
