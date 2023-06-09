import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ListComponent } from './components/list/list.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Ruta de redirección
  { path: 'login', component: LoginComponent },
  { path: 'catalogo', component: ListComponent }, // Ruta con componente asociado
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
