import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { BiographyComponent } from './biography/biography.component';
import { ContactComponent } from './contact/contact.component';
import { PortaitphotosComponent } from './portaitphotos/portaitphotos.component';
import { LandscapephotosComponent } from './landscapephotos/landscapephotos.component';
import { WeddingphotosComponent } from './weddingphotos/weddingphotos.component';
import { ArchitecturephotosComponent } from './architecturephotos/architecturephotos.component';
import { StudiophotosComponent } from './studiophotos/studiophotos.component';
import { DancingphotosComponent } from './dancingphotos/dancingphotos.component';
import { NgbPaginationModule, NgbAlertModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    BiographyComponent,
    ContactComponent,
    PortaitphotosComponent,
    LandscapephotosComponent,
    WeddingphotosComponent,
    ArchitecturephotosComponent,
    StudiophotosComponent,
    DancingphotosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbPaginationModule, 
    NgbAlertModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
