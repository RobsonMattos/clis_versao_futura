import { Component, OnInit, Input } from '@angular/core';
import { OrganizacaoMilitar } from './organizacao-militar.model';

@Component({
  selector: 'app-organizaca-militar',
  templateUrl: './organizaca-militar.component.html'
})
export class OrganizacaMilitarComponent implements OnInit {

  @Input() organizacaoMilitar: OrganizacaoMilitar;

  constructor() { }

  ngOnInit() {
  }

}
