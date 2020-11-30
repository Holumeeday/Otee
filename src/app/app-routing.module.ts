import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { InitComponent } from './init/init.component';
import { MapComponent } from './map/map.component';
import { StoryComponent } from './story/story.component';
import {WelcomeComponent} from './welcome/welcome.component';


const routes: Routes = [
  // { 
  //   path: '',   redirectTo: 'init', pathMatch: 'full' 
  // },
  {
    path: '', component:WelcomeComponent
  },
  {
    path:'init', component:InitComponent
  },
  {
    path:'gallery', component:GalleryComponent
  },
  {
    path:'story', component:StoryComponent
  },
  {
    path:'google-map', component:MapComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
