import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { PessoasModule } from "./pessoas/pessoas.module";
import { LancamentosModule } from "./lancamentos/lancamentos.module";
import { CoreModule } from "./core/core.module";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {InterceptorService} from "./_services/interceptor.service";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    PessoasModule,
    LancamentosModule,
    CoreModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
