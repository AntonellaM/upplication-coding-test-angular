import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ProgressbarModule, ProgressbarComponent } from 'ngx-bootstrap/progressbar';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule, 
    ProgressbarModule.forRoot()
  ],
  providers: [ProgressbarComponent],
  bootstrap: [AppComponent]
})

export class AppModule { }
