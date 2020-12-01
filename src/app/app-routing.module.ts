import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { Op1PorcentajeComponent } from './op1-porcentaje/op1-porcentaje.component';
import { Op2PorcentajeComponent } from './op2-porcentaje/op2-porcentaje.component';

const routes: Routes = [
  {path: '',redirectTo: 'home', pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'option1', component: Op1PorcentajeComponent},
  {path: 'option2', component: Op2PorcentajeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
