import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaContatosComponent } from './pages/lista-contatos/lista-contatos.component';
import { FormContatoComponent } from './pages/form-contato/form-contato.component';

const routes: Routes = [
  { path: '', redirectTo: '/contatos', pathMatch: 'full' },
  { path: 'contatos', component: ListaContatosComponent, title: 'Lista de Contatos' },
  { path: 'contatos/novo', component: FormContatoComponent, title: 'Adicionar Contato' },
  { path: 'contatos/editar/:id', component: FormContatoComponent, title: 'Editar Contato' },
  { path: '**', redirectTo: '/contatos' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }