import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LancamentoService {

  lancamentosUrl = 'http://localhost:8080/lancamentos';

  constructor(private http: HttpClient) {
  }

  pesquisar(filtro: any): Observable<any> {

    const params = new URLSearchParams();

    if (filtro.descricao) {
      params.set('descricao', filtro.descricao);
    }
    return this.http.get(`${this.lancamentosUrl}?resumo`, );
  }
}
