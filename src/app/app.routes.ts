import { Routes } from '@angular/router';
import { SalesComponent } from './pages/sales/sales.component';
import { DataComponent } from './pages/data/data.component';
import { SettingsComponent } from './pages/settings/settings.component';

export const routes: Routes = [

    {
        path: '',
        component: SalesComponent,
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
]