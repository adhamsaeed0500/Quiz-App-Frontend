import { Injectable } from '@angular/core';
import { TOKEN_EXPIRATION_DATE, TOKEN_KEY } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLogged(){
    return (localStorage.getItem("token")) ? true:false
  }

 saveToken(token:any){
  localStorage.setItem(TOKEN_KEY,token);
 }

 removeToken(){
  localStorage.removeItem(TOKEN_KEY);
 }

 saveTokenExpirationDate(expiration:any){
  localStorage.setItem(TOKEN_EXPIRATION_DATE,expiration);
 }


}
