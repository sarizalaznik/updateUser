// import { Routes } from '@angular/router';

// export const routes: Routes = [];
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UpdateComponent } from './update/update.component';

export const routes: Routes = [
  { path: '', component: LoginComponent }, // Default route
  { path: 'update', component: UpdateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
