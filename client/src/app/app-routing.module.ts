///<reference path="users/users.component.ts"/>
import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {UsersComponent} from "./users/users.component";
import {MapComponent} from "./map/map.component";

const appRoutes: Routes = [
  {path: '', component: UsersComponent},
  {path: 'map', component: MapComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
