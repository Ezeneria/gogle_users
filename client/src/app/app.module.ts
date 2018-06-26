import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import { UsersComponent } from './users/users.component';
import { HttpClientModule }   from '@angular/common/http';
@NgModule({
	imports:[BrowserModule, FormsModule, HttpClientModule],
	declarations: [AppComponent,UsersComponent],
	bootstrap: [AppComponent]
})
export class AppModule{}
