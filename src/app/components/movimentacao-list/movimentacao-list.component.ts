import { Component, OnInit } from '@angular/core';
import { MovimentacaoFEService } from 'src/app/services/movimentacao-fe.service';

@Component({
  selector: 'app-movimentacao-list',
  templateUrl: './movimentacao-list.component.html',
  styleUrls: ['./movimentacao-list.component.css']
})
export class MovimentacaoListComponent implements OnInit {
  movimentacoes:any;

  constructor( private movimentacaoFEService: MovimentacaoFEService) { }

  ngOnInit(): void {
    this.listMovimentacoes();
  }
  listMovimentacoes(): void{
        this.movimentacaoFEService.list()
        .subscribe(
          data => {
            this.movimentacoes = data;
            console.log(data);
          },
          error => {
            console.log(error);
          });
  }

}
