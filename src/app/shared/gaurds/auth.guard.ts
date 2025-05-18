import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { combineLatest, map, take } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
 
  const router = inject(Router);
  const auth = inject(AuthService);


   //- combineLatest() is an RxJS function that combines multiple observables.
  //- It waits for all observables to emit a value and then provides their latest values as an array.
  //- In this case, it waits for:
 //- auth.isloggedIn$ (whether user is logged in)
 //- auth.isSubmitedIn$ (whether the user has submitted something)

 return combineLatest([auth.isSubmitedIn$ , auth.isSubmitedIn$]).pipe(
  take(1),// Ensures we only take the latest values once
          //- This ensures that only the first emitted values from combineLatest are used.
          // After receiving the first values from both observables, it stops listening to further updates.
          
  //- map(([isLoggedIn, isSubmitted]) => {...}) → Extracts both values from combineLatest.
  map(([isLogged,isSubmited])=>{
    if(isLogged || isSubmited){
      return true
    }else{
      return router.createUrlTree(['/signin'])
    }
  })
 )
  


};
