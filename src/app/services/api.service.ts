import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ChatGPTResponse } from '../interfaces/chatgpt';
import { Profile } from '../interfaces/profile';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { 
  }
  geProfile():Observable<Profile>{
    return this.http.get<Profile>('http://127.0.0.1:8080/api/chatgpt/get-algo');
  }
  // localhost:8080/api/chatgpt/
  geMsgChatGpt(request:any):Observable<ChatGPTResponse>{
    return this.http.post<ChatGPTResponse>('http://127.0.0.1:8080/api/chatgpt/',request);
  }
}
