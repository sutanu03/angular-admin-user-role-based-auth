import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { CreateUserComponent } from './pages/create-user/create-user.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { LayoutComponent } from './pages/layout/layout.component';

export const routes: Routes = [

    // default path
    {
        path:'',
        redirectTo:'login',
        pathMatch:'full'
    },
    // login path
    {
        path:'login',
        component:LoginComponent
    },
    // after login layout because it has kind of admin access
    {
        path:'',
        component:LayoutComponent,
        children:[
            {
                path:'create',
                component:CreateUserComponent
            },
            {
                path:'users',
                component:UserListComponent
            }
        ]
    }
];
