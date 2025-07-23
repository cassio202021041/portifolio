import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./view/home/home/home.component";
import { CurriculoComponent } from "./model/curriculo/curriculo.component";
import { RedesComponent } from "./model/redes/redes.component";
import { CursosComponent } from "./model/cursos/cursos.component";
import { ProjetosComponent } from "./model/projetos/projetos.component";
import { CurriculoFormComponent } from "./model/curriculo-form/curriculo-form.component";


const routes: Routes = [
 {
    path: "",
    component: HomeComponent
  },
  {
    path: "curriculo",
    component: CurriculoComponent
  },
  {
    path: "skills",
    component: RedesComponent
  },
  {
    path: "habilidades",
    component: CursosComponent
  },
  {
    path: "projetos",
    component: ProjetosComponent
  },
  {
    path: "formulario",
    component: CurriculoFormComponent

  },
  {
    path: "**",
    redirectTo: "",
    pathMatch: "full"
  }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
