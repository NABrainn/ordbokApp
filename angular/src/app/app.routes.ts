import { Routes } from '@angular/router';
import { RegisterFormComponent } from './components/auth/register-form/register-form.component';
import { LoginFormComponent } from './components/auth/login-form/login-form.component';
import { LibraryComponent } from './components/library/library.component';
import { LoginGuard } from './auth/LoginGuard';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './components/auth/page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: 'register', component: RegisterFormComponent },
    { path: 'login', component: LoginFormComponent },
    { path: 'library', component: LibraryComponent, canActivate: [LoginGuard] },
    { path: '', component: LibraryComponent, canActivate: [LoginGuard] },
    { path: '**', component: PageNotFoundComponent }
];
