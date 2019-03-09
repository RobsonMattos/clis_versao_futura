import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OrganizacaoMilitarListComponent } from './organizacao-militar-list/organizacao-militar-list.component';
import { OrganizacaMilitarComponent } from './organizacao-militar-list/organizaca-militar/organizaca-militar.component';
import { OmService } from './organizacao-militar-list/om.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    OrganizacaoMilitarListComponent,
    OrganizacaMilitarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [OmService],
  bootstrap: [AppComponent]
})
export class AppModule { }
