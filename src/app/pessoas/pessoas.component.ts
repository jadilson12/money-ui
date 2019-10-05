import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.css']
})
export class PessoasComponent implements OnInit {

  pessoas = [
    {nome: 'Maria', cidade: 'Brasilia', estado: 'DF', status: 'true'},
    {nome: 'Maria', cidade: 'Brasilia', estado: 'DF', status: 'flase'},
    {nome: 'Maria', cidade: 'Brasilia', estado: 'DF', status: 'flase'},
    {nome: 'Maria', cidade: 'Brasilia', estado: 'DF', status: 'flase'},
    {nome: 'Maria', cidade: 'Brasilia', estado: 'DF', status: 'flase'},
    {nome: 'Maria', cidade: 'Brasilia', estado: 'DF', status: 'flase'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
