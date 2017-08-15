import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarComponent }   from './components/navbar/navbar.component';
import { HomeComponent }   from './components/pages/home.component';
import { AboutComponent }   from './components/pages/about.component';
import { routing } from './app.routing';
import {JumbotronComponent} from './components/jumbotron/jumbotron.component'
import { ResumeComponent }   from './components/pages/resume.component';
import {ContactComponent} from './components/pages/contact.component';

@NgModule({
  imports:      [ BrowserModule,routing],
    declarations: [ AppComponent, 
                  NavbarComponent, 
                  JumbotronComponent,
                  AboutComponent,
                  ResumeComponent,
                  ContactComponent,
                  HomeComponent
                  
                ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
