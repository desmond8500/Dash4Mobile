import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'settings',
    loadComponent: () => import('./settings/settings.page').then( m => m.SettingsPage)
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.page').then( m => m.DashboardPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./auth/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'register',
    loadComponent: () => import('./auth/register/register.page').then( m => m.RegisterPage)
  },
  {
    path: 'logout',
    loadComponent: () => import('./auth/logout/logout.page').then( m => m.LogoutPage)
  },
  {
    path: 'reset_password',
    loadComponent: () => import('./auth/reset-password/reset-password.page').then( m => m.ResetPasswordPage)
  },
  {
    path: 'clients',
    loadComponent: () => import('./erp/clients/clients.page').then( m => m.ClientsPage)
  },
  {
    path: 'projects/:clientId',
    loadComponent: () => import('./erp/projects/projects.page').then( m => m.ProjectsPage)
  },
  {
    path: 'project/:projectId',
    loadComponent: () => import('./erp/project/project.page').then( m => m.ProjectPage)
  },


];
