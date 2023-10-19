import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Components
import { HomeComponent } from './views/home/home.component';
import { PaginaNoEncontradaComponetComponent } from './components/pagina-no-encontrada-componet/pagina-no-encontrada-componet.component';
import { SobrenosotrosComponent } from './views/sobrenosotros/sobrenosotros.component';
import { RegisterComponent } from './views/register/register.component';
import { ZonausuariosComponent } from './views/zonausuarios/zonausuarios.component';
import { PedidoconfirmadoComponent } from './views/pedidoconfirmado/pedidoconfirmado.component';
import { AntiguasreservasComponent } from './views/antiguasreservas/antiguasreservas.component';
import { ContactanosComponent } from './views/contactanos/contactanos.component';
import { ConfirmacionComponent } from './views/confirmacion/confirmacion.component';


// Other components
import { LogInComponent } from './components/log-in/log-in.component';
import { MenuComponent } from './components/menu/menu.component';

const routes: Routes = [ 
  // Routes
  { path: 'home', component: HomeComponent },
  
 
  // Components
  { path: 'menu', component: MenuComponent },
  // { path: 'logout', component: LogOutComponent }, // You can add this if it's needed
  { path: 'login', component: LogInComponent },

  // Pages
  { path: 'sobrenosotros', component: SobrenosotrosComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'zonausuarios', component: ZonausuariosComponent },
  { path: 'pedidoconfirmado', component: PedidoconfirmadoComponent },
  { path: 'antiguasreservas', component: AntiguasreservasComponent },
  { path: 'contactanos', component: ContactanosComponent },
  { path: 'confirmacion', component: ConfirmacionComponent },
  

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PaginaNoEncontradaComponetComponent } // If the route does not exist
];
  
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
