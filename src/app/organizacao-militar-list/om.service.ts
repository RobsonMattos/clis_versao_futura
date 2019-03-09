import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OrganizacaoMilitar } from './organizaca-militar/organizacao-militar.model';
import { Observable } from 'rxjs';
import { map, catchError, flatMap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable()
export class OmService {

  apiPath: string = `${environment.URL}/organizacoesMilitar`;

  constructor(private http: HttpClient) { }
  
  public getAll() {
    return this.http.get<OrganizacaoMilitar[]>(this.apiPath);
  }

}
