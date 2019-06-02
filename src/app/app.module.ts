import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSelectModule, MatSnackBarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { FooterComponent } from './footer/footer.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HeaderComponent } from './header/header.component';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { QrcodeComponent } from './qrcode/qrcode.component';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { SchnitzelComponent } from './qrcode/schnitzel/schnitzel.component';
import { SchnitzelService } from './qrcode/schnitzel.service';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    QrcodeComponent,
    HomeComponent,
    SchnitzelComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    ZXingScannerModule.forRoot(),
    MDBBootstrapModule.forRoot(),
    MatSelectModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
  ],
  providers: [SchnitzelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
