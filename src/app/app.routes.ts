import { Routes } from '@angular/router';
import { SalesComponent } from './pages/sales/sales.component';
import { DataComponent } from './pages/data/data.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { WrapperComponent } from './pages/auth/wrapper/wrapper.component';

export const routes: Routes = [

    {
        path: '',
        component: WrapperComponent,
    },
    
    {
        path: 'sales',
        component: SalesComponent,
    },
    
    {
        path: 'data',
        component: DataComponent,
    },

    
    {
        path: 'settings',
        component: SettingsComponent,
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'register',
        component: RegisterComponent,
    },
]