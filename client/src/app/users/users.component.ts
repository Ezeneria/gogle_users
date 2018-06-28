import { Component, OnInit } from '@angular/core';

import {UsersService} from "./users.service";
import { Response } from "@angular/http";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users = [];
  constructor(private getUsers: UsersService) {
  }
  // qwerty(ind){
  //   let linkObj = {
  //     getLat: this.users[ind].lat,
  //     getLng: this.users[ind].lng,
  //     getCity: this.users[ind].town,
  //     getStreet: this.users[ind].street,
  //     getHouse: this.users[ind].house,
  //   };
  //   if(linkObj.getLat && linkObj.getLng){
  //     let getLinks = 'https://www.google.com/maps/search/?api=1&query='+linkObj.getLat+','+linkObj.getLng+'';
  //     return getLinks;
  //   }
  // }
  ngOnInit() {
    this.getUsers.getUsers().subscribe((response:Response) =>{
      let data = response.json();
      this.users = data;
    });
  }
}
