import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PessoasPesquisaComponent} from "./pessoas/pessoas-pesquisa/pessoas-pesquisa.component";
import {LancamentoPesquisaComponent} from "./lancamentos/lancamento-pesquisa/lancamento-pesquisa.component";


const routes: Routes = [
  {path: "", component: PessoasPesquisaComponent},
  {path: "pessoas", component: PessoasPesquisaComponent},
  {path: "lancamentos", component: LancamentoPesquisaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
