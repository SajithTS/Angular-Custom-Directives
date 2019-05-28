import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorDirective } from './error.directive';
import { StructuralDirective } from './structural.directive';

@NgModule({
  declarations: [
    AppComponent,
    ErrorDirective,
    StructuralDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
