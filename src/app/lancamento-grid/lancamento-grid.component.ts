import { Component, OnInit } from "@angular/core";
import { Input } from "@angular/core";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-lancamento-grid",
  templateUrl: "./lancamento-grid.component.html",
  styleUrls: ["./lancamento-grid.component.css"]
})
export class LancamentoGridComponent implements OnInit {
  faTrash = faTrash;
  faEdit = faEdit;

  @Input() lancamentos = [];

  constructor() {}

  ngOnInit() {}
}
