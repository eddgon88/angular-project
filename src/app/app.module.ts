import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RedirectionComponent } from './components/redirection/redirection.component';

import { ExpiredOrderComponent } from './components/expired-order/expired-order.component';
import { UnknownErrorComponent } from './components/unknown-error/unknown-error.component';

@NgModule({
  declarations: [
    AppComponent,
    RedirectionComponent,
    ExpiredOrderComponent,
    UnknownErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
