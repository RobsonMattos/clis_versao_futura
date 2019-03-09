import { Component, OnInit } from '@angular/core';
import { OrganizacaoMilitar } from './organizaca-militar/organizacao-militar.model';
import { OmService } from './om.service';

@Component({
  selector: 'app-organizacao-militar-list',
  templateUrl: './organizacao-militar-list.component.html'
})
export class OrganizacaoMilitarListComponent implements OnInit {
  
  organizacoesMilitar: OrganizacaoMilitar[];

  constructor(private omService: OmService) { }

  ngOnInit() {
    this.omService.getAll().
      subscribe((data: OrganizacaoMilitar[]) => this.organizacoesMilitar = data);
  }

}
