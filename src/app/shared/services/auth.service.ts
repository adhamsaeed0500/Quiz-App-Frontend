import { Injectable } from '@angular/core';
import { TOKEN_EXPIRATION_DATE, TOKEN_KEY } from '../constants';
import { BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

 public isloggedIn$:BehaviorSubject<boolean> = new BehaviorSubject<boolean> (false);

 public isSubmitedIn$:BehaviorSubject<boolean> = new BehaviorSubject<boolean> (false);

  isTokenExists():boolean{
    return (localStorage.getItem("token")) ? true:false
  }

 saveToken(token:any){
  localStorage.setItem(TOKEN_KEY,token);
 }

 getToken():string{
  return localStorage.getItem(TOKEN_KEY) ;
 }

 removeToken(){
  localStorage.removeItem(TOKEN_KEY);
 }
 
 removeTokenExpirationDate(){
  localStorage.removeItem(TOKEN_EXPIRATION_DATE);
 }

 saveTokenExpirationDate(expiration:any){
  localStorage.setItem(TOKEN_EXPIRATION_DATE,expiration);
 }

 getClaims() {
  const token = this.getToken();
  if (!token) {
    console.error('Token is missing!');
    return null;
  }
  return JSON.parse(window.atob(token.split('.')[1]));
}



}
