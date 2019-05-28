import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { QrcodeComponent } from './qrcode/qrcode.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'schnitzeljagd',
    component: QrcodeComponent
  },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
