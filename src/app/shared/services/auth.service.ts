import { Injectable } from '@angular/core';
import { TOKEN_EXPIRATION_DATE, TOKEN_KEY } from '../constants';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isloggedIn$ =  BehaviorSubject<false>;

  isTokenExists(){
    return (localStorage.getItem("token")) ? true:false
  }

 saveToken(token:any){
  localStorage.setItem(TOKEN_KEY,token);
 }

 getToken(token:any){
  localStorage.getItem(TOKEN_KEY);
 }

 removeToken(){
  //localStorage.removeItem(TOKEN_KEY);
 }

 saveTokenExpirationDate(expiration:any){
  localStorage.setItem(TOKEN_EXPIRATION_DATE,expiration);
 }


}
