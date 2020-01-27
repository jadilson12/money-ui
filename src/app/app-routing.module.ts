import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PessoasPesquisaComponent} from "./pessoas/pessoas-pesquisa/pessoas-pesquisa.component";
import {LancamentoPesquisaComponent} from "./lancamentos/lancamento-pesquisa/lancamento-pesquisa.component";


const routes: Routes = [
  {path: "", component: LancamentoPesquisaComponent},
  {path: "lancamentos", component: LancamentoPesquisaComponent},
  // {path: "", component: PessoasPesquisaComponent},
  {path: "pessoas", component: PessoasPesquisaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
