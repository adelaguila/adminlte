
import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';


// Rutas
import { APP_ROUTES } from './app.routes';

//Modulos
import { PagesModules } from './pages/pages.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { TableModule } from 'primeng/table';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    APP_ROUTES,
    PagesModules,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    NoopAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
