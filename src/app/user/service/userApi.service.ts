import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterModel } from '../models/registerModel';
import { Observable } from 'rxjs';
import { LoginModel } from '../models/loginModel';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

constructor(private htttp:HttpClient) { }

 private readonly baseUrl="https://localhost:7252/api/Account";

register(registerData:RegisterModel):Observable<any>{
  return this.htttp.post<any>(`${this.baseUrl}/Register`,registerData);

}

login(loginModel:LoginModel):Observable<any>{
  return this.htttp.post<any>(`${this.baseUrl}/Login`,loginModel);

}

}
