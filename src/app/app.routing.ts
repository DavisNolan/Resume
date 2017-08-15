import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent }      from './components/pages/home.component';
import { AboutComponent }      from './components/pages/about.component';
import { ResumeComponent} from './components/pages/resume.component';
import {ContactComponent} from './components/pages/contact.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  
  {
    path: 'about',
    component: AboutComponent
  },
{
    path: 'resume',
    component: ResumeComponent
  },
{
    path: 'contact',
    component: ContactComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);