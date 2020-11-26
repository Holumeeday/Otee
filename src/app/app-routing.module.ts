import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { InitComponent } from './init/init.component';
import { StoryComponent } from './story/story.component';


const routes: Routes = [
  { 
    path: '',   redirectTo: 'init', pathMatch: 'full' 
  },
  {
    path:'init', component:InitComponent
  },
  {
    path:'gallery', component:GalleryComponent
  },
  {
    path:'story', component:StoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }