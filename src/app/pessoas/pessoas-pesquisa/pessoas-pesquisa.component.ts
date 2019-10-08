import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-pessoas-pesquisa",
  templateUrl: "./pessoas-pesquisa.component.html",
  styleUrls: ["./pessoas-pesquisa.component.css"]
})
export class PessoasPesquisaComponent implements OnInit {
  pessoas = [
    { nome: "Maria", cidade: "Brasilia", estado: "DF", status: "true" },
    { nome: "Maria", cidade: "Brasilia", estado: "DF", status: "flase" },
    { nome: "Maria", cidade: "Brasilia", estado: "DF", status: "flase" },
    { nome: "Maria", cidade: "Brasilia", estado: "DF", status: "flase" },
    { nome: "Maria", cidade: "Brasilia", estado: "DF", status: "flase" },
    { nome: "Maria", cidade: "Brasilia", estado: "DF", status: "flase" }
  ];

  constructor() {}

  ngOnInit() {}
}
