import {Component, OnInit} from "@angular/core";
import {LancamentoService} from "../lancamento.service";
import {log} from "util";

@Component({
  selector: "app-lancamento-pesquisa",
  templateUrl: "./lancamento-pesquisa.component.html",
  styleUrls: ["./lancamento-pesquisa.component.css"]
})

export class LancamentoPesquisaComponent implements OnInit {
  lancamentos = [];

  constructor(
    private lancamentoService: LancamentoService
  ) {
  }

  ngOnInit(): void {
    this.pesquisar();
  }

  pesquisar() {
    this.lancamentoService.pesquisar({})
      .subscribe(res => {
        this.lancamentos = res.content;
      }, error => alert(error));
  }
}
