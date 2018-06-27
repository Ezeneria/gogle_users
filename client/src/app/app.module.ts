import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { AgmCoreModule } from '@agm/core'
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import {UsersService} from "./users/users.service";
import { MapComponent } from './map/map.component';
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
        apiKey: 'AIzaSyDai0nLwPajIKk0sSD7VbaTSeapXwLf8F0'
      }
    )
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
