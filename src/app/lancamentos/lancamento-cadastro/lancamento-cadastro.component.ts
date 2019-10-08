import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-lancamento-cadastro",
  templateUrl: "./lancamento-cadastro.component.html",
  styleUrls: ["./lancamento-cadastro.component.css"]
})
export class LancamentoCadastroComponent implements OnInit {

  tipos = [
    { label: "Receita", value: "RECEITA"},
    { label: "Despesa", value: "DESPESA"}
  ];

  categorias = [
    {label: "Alimentação", value: 0},
    {label: "Lazer", value: 2}
  ];

  pessoas = [
    {label : "Carlos de Jesus", value: 0},
    {label : "Pedro Souza", value: 1},
    {label : "Maria Lima", value: 2}
  ];

  constructor() {}

  ngOnInit() {}
}
