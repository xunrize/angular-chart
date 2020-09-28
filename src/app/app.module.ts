import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LgPageComponent } from './lg-page/lg-page.component';
import { HomeComponent } from './home/home.component';
import { HighchartsChartModule } from 'highcharts-angular';


@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    HighchartsChartModule,
    RouterModule.forRoot([
      { path: '', component: AppComponent },
      { path: 'lgpage', component: LgPageComponent },
     ]),
  
  ],
  declarations: [ AppComponent, HelloComponent, LgPageComponent, HomeComponent ],
  bootstrap:    [ AppComponent ],
  
})
export class AppModule { }
