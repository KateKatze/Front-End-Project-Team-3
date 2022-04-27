import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArchitecturephotosComponent } from './architecturephotos/architecturephotos.component';
import { BiographyComponent } from './biography/biography.component';
import { ContactComponent } from './contact/contact.component';
import { DancingphotosComponent } from './dancingphotos/dancingphotos.component';
import { HomeComponent } from './home/home.component';
import { LandscapephotosComponent } from './landscapephotos/landscapephotos.component';
import { PortaitphotosComponent } from './portaitphotos/portaitphotos.component';
import { StudiophotosComponent } from './studiophotos/studiophotos.component';
import { WeddingphotosComponent } from './weddingphotos/weddingphotos.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent
},{
  path: 'biography',
  component: BiographyComponent
}, {
  path: 'contact',
  component: ContactComponent
}, {
  path: 'portrait',
  component: PortaitphotosComponent
}, {
  path: 'landscapephotos',
  component: LandscapephotosComponent
}, {
  path: 'weddingphotos',
  component: WeddingphotosComponent
}, {
  path: 'architecturephotos',
  component: ArchitecturephotosComponent
}, {
  path: 'studiophotos',
  component: StudiophotosComponent
}, {
  path: 'dancingphotos',
  component: DancingphotosComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
