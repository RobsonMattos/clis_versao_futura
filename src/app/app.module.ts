import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OrganizacaoMilitarListComponent } from './organizacao-militar-list/organizacao-militar-list.component';
import { OrganizacaMilitarComponent } from './organizacao-militar-list/organizaca-militar/organizaca-militar.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    OrganizacaoMilitarListComponent,
    OrganizacaMilitarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
