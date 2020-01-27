import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";

import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

import {TooltipModule} from "primeng/tooltip";
import {SelectButtonModule} from "primeng/selectbutton";
import {InputTextModule} from "primeng/inputtext";
import {InputTextareaModule} from "primeng/inputtextarea";
import {ButtonModule} from "primeng/button";
import {TableModule} from "primeng/table";
import {CalendarModule} from "primeng/calendar";
import {DropdownModule} from "primeng/dropdown";
import {CurrencyMaskModule} from "ng2-currency-mask";
import {InputMaskModule} from "primeng/inputmask";


import {LancamentoGridComponent} from './lancamento-grid/lancamento-grid.component';
import {LancamentoCadastroComponent} from './lancamento-cadastro/lancamento-cadastro.component';
import {LancamentoPesquisaComponent} from "./lancamento-pesquisa/lancamento-pesquisa.component";

import {SharedModule} from '../shared/shared.module';
import {LancamentoService} from "./lancamento.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    LancamentoPesquisaComponent,
    LancamentoGridComponent,
    LancamentoCadastroComponent
  ],
  imports: [
    CommonModule,
    FormsModule,

    FontAwesomeModule,

    InputTextModule,
    InputTextareaModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    CalendarModule,
    SelectButtonModule,
    DropdownModule,
    CurrencyMaskModule,
    InputMaskModule,
    SharedModule,
    HttpClientModule
  ],
  exports: [LancamentoPesquisaComponent, LancamentoCadastroComponent],
  providers: [
    LancamentoService
  ]
})
export class LancamentosModule {
}
