import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { InitComponent } from './init/init.component';
import { GalleryComponent } from './gallery/gallery.component';
import { StoryComponent } from './story/story.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MapComponent } from './map/map.component';
import { RsvpComponent } from './rsvp/rsvp.component';
import { GiftComponent } from './gift/gift.component';
import { VendorComponent } from './vendor/vendor.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    InitComponent,
    GalleryComponent,
    StoryComponent,
    WelcomeComponent,
    MapComponent,
    RsvpComponent,
    GiftComponent,
    VendorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
