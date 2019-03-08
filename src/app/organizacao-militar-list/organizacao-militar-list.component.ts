import { Component, OnInit } from '@angular/core';
import { OrganizacaoMilitar } from './organizaca-militar/organizacao-militar.model';

@Component({
  selector: 'app-organizacao-militar-list',
  templateUrl: './organizacao-militar-list.component.html'
})
export class OrganizacaoMilitarListComponent implements OnInit {
  
  organizacoesMilitar: OrganizacaoMilitar[] = [
    {
      id: 1,
      nome: "Navio-Patrulha Guaratuba",
      designacao: "NPAUBA",
      quantidadePedidoServico: 50,
      quantidadeOrdemServico: 543,
      total: 450.000,
    },
    {
      id: 2,
      nome: "Navio-Patrulha Gravataí",
      designacao: "NPATAI",
      quantidadePedidoServico: 50,
      quantidadeOrdemServico: 543,
      total: 450.000,
    },
    {
      id: 3,
      nome: "Navio-Varredor Araçatuba",
      designacao: "NVTUBA",
      quantidadePedidoServico: 50,
      quantidadeOrdemServico: 543,
      total: 450.000,
    },
    {
      id: 4,
      nome: "Navio-Patrulha Graúna",
      designacao: "NPAUNA",
      quantidadePedidoServico: 50,
      quantidadeOrdemServico: 543,
      total: 450.000,
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
