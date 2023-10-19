import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { SobrenosotrosComponent } from './views/sobrenosotros/sobrenosotros.component';
import { RegisterComponent } from './views/register/register.component';
import { HomePipe } from './home.pipe';
import { AppRoutingModule } from './app-routing.module';
import { PaginaNoEncontradaComponetComponent } from './components/pagina-no-encontrada-componet/pagina-no-encontrada-componet.component';
import { ZonausuariosComponent } from './views/zonausuarios/zonausuarios.component';
import { PedidoconfirmadoComponent } from './views/pedidoconfirmado/pedidoconfirmado.component';
import { AntiguasreservasComponent } from './views/antiguasreservas/antiguasreservas.component';
import { ContactanosComponent } from './views/contactanos/contactanos.component';
import { ConfirmacionComponent } from './views/confirmacion/confirmacion.component';
import { CustomHeaderComponent } from './components/custom-header/custom-header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    LogInComponent,
    SobrenosotrosComponent,
    RegisterComponent,
    HomePipe,
    PaginaNoEncontradaComponetComponent,
    ZonausuariosComponent,
    PedidoconfirmadoComponent,
    AntiguasreservasComponent,
    ContactanosComponent,
    ConfirmacionComponent,
    CustomHeaderComponent,
  ],
  imports: [
    BrowserModule,
    //FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
