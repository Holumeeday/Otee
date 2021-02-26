import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { GiftComponent } from './gift/gift.component';
import { InitComponent } from './init/init.component';
import { MapComponent } from './map/map.component';
import { RsvpComponent } from './rsvp/rsvp.component';
import { StoryComponent } from './story/story.component';
import { VendorComponent } from './vendor/vendor.component';
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
  },
  {
    path:'rsvp', component:RsvpComponent
  },
  {
    path:'giftregistry', component:GiftComponent
  }
  ,
  {
    path:'vendorlist', component:VendorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
