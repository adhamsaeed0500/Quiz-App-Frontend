import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterModel } from '../models/registerModel';
import { Observable } from 'rxjs';
import { LoginModel } from '../models/loginModel';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

constructor(private htttp:HttpClient) { }

 

register(registerData:RegisterModel):Observable<any>{
  return this.htttp.post<any>(`${environment.apiBaseUrl}/Account/Register`,registerData);

}

login(loginModel:LoginModel):Observable<any>{
  return this.htttp.post<any>(`${environment.apiBaseUrl}/Account/Login`,loginModel);

}

}
