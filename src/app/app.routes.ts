import { Routes } from '@angular/router';
import { SalesComponent } from './pages/sales/sales.component';
import { DataComponent } from './pages/data/data.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/auth/login/login.component';

export const routes: Routes = [

    {
        path: '',
        component: LoginComponent,
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
        path: 'register',
        component: RegisterComponent,
    },
]