import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

const baseUrl = 'http://localhost:8080'; //alterar para o link do API quando online

@Injectable({
  providedIn: 'root'
})
export class MovimentacaoFEService {

  constructor(private http: HttpClient) { }
  list():Observable<any> {
    return this.http.get(`${baseUrl}/movimentacoes`)
    }
}
