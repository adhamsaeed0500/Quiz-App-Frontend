import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { LoginComponent } from './user/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { authGuard } from './shared/gaurds/auth.guard';

export const routes: Routes = [
    {path:'', redirectTo:"signin",pathMatch:'full'},
    {path:'dashboard',component:DashboardComponent},
    {path:'',component:UserComponent,
        children:[
            {path:'signup',component:RegistrationComponent},
            {path:'signin',component:LoginComponent}
        ]
    },







];
