import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { TimelineComponent } from './timeline/timeline.component';
import {AppRoutingModule} from "./app-routing.module";
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    NavComponent,
    FooterComponent,
    TimelineComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
