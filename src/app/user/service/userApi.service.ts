import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterModel } from '../models/registerModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

constructor(private htttp:HttpClient) { }

 private readonly baseUrl="https://localhost:7252/api/Account";

register(registerData:RegisterModel):Observable<any>{
  return this.htttp.post<any>(`${this.baseUrl}/Register`,registerData);

}

}
