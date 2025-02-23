import { registerLocaleData } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { LOCALE_ID, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FooterComponent } from "./components/template/footer/footer/footer.component";
import { HeaderComponent } from "./components/template/header/header/header.component";
import { NavComponent } from "./components/template/nav/nav/nav.component";
import { HomeComponent } from "./view/home/home/home.component";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ForDirective } from "./directives/for.directive";
import { RedDirective } from "./directives/red.directive";
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RedesComponent } from './model/redes/redes.component';
import { CursosComponent } from './model/cursos/cursos.component';
import { CurriculoComponent } from './model/curriculo/curriculo.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";












@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    NavComponent,
    RedDirective,
    ForDirective,
    RedesComponent,
    CursosComponent,
    CurriculoComponent,

  ],
  imports: [
      BrowserModule,
      BrowserAnimationsModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
      BrowserModule,
      RouterModule,
      BrowserModule,
      MatSnackBarModule,
      MatToolbarModule,
      MatCardModule,
      MatSidenavModule,
      MatListModule,
      ReactiveFormsModule,
      PdfViewerModule
    ],

  providers: [{
    provide:LOCALE_ID, //local e data em portugues
    useValue: 'pt-BR'
  }, provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule { }
