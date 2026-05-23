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
    loadComponent: () =>
      import('./settings/settings.page').then((m) => m.SettingsPage),
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./dashboard/dashboard.page').then((m) => m.DashboardPage),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./auth/login/login.page').then((m) => m.LoginPage),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./auth/register/register.page').then((m) => m.RegisterPage),
  },
  {
    path: 'logout',
    loadComponent: () =>
      import('./auth/logout/logout.page').then((m) => m.LogoutPage),
  },
  {
    path: 'reset_password',
    loadComponent: () =>
      import('./auth/reset-password/reset-password.page').then(
        (m) => m.ResetPasswordPage,
      ),
  },
  {
    path: 'clients',
    loadComponent: () =>
      import('./erp/clients/clients.page').then((m) => m.ClientsPage),
  },
  {
    path: 'projects/:clientId',
    loadComponent: () =>
      import('./erp/projects/projects.page').then((m) => m.ProjectsPage),
  },
  {
    path: 'project/:projectId',
    loadComponent: () =>
      import('./erp/projects/project/project.page').then((m) => m.ProjectPage),
  },
  {
    path: 'tasks/:projet_id',
    loadComponent: () =>
      import('./erp/tasks/tasks.page').then((m) => m.TasksPage),
  },
  {
    path: 'task/:task_id',
    loadComponent: () =>
      import('./erp/tasks/task/task.page').then((m) => m.TaskPage),
  },
  {
    path: 'galaxy',
    loadComponent: () =>
      import('./security/tools/galaxy/galaxy.page').then((m) => m.GalaxyPage),
  },
  {
    path: 'contacts/:projet_id',
    loadComponent: () =>
      import('./erp/contacts/contacts.page').then((m) => m.ContactsPage),
  },
  {
    path: 'buildings/:projet_id',
    loadComponent: () =>
      import('./erp/buildings/buildings.page').then((m) => m.BuildingsPage),
  },
  {
    path: 'journaux/:projet_id',
    loadComponent: () =>
      import('./erp/journaux/journaux.page').then((m) => m.JournauxPage),
  },
  {
    path: 'invoices/:projet_id',
    loadComponent: () =>
      import('./erp/invoices/invoices.page').then((m) => m.InvoicesPage),
  },
  {
    path: 'notes/:projet_id',
    loadComponent: () =>
      import('./erp/notes/notes.page').then((m) => m.NotesPage),
  },
  {
    path: 'articles',
    loadComponent: () => import('./stock/articles/articles.page').then( m => m.ArticlesPage)
  },
  {
    path: 'article/:article_id',
    loadComponent: () => import('./stock/article/article.page').then( m => m.ArticlePage)
  },
  {
    path: 'providers',
    loadComponent: () => import('./stock/providers/providers.page').then( m => m.ProvidersPage)
  },
  {
    path: 'provider/:provider_id',
    loadComponent: () => import('./stock/provider/provider.page').then( m => m.ProviderPage)
  },
  {
    path: 'brands',
    loadComponent: () => import('./stock/brands/brands.page').then( m => m.BrandsPage)
  },
  {
    path: 'brand/:brand_id',
    loadComponent: () => import('./stock/brand/brand.page').then( m => m.BrandPage)
  },  {
    path: 'editor',
    loadComponent: () => import('./features/editor/editor.page').then( m => m.EditorPage)
  },


];
