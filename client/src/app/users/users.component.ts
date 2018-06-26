import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Injectable }from '@angular/core';
@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})
export class UsersComponent {

    constructor(private httpClient:HttpClient){
        let obj;
        this.httpClient.get('https://api.github.com/users/1').subscribe(
            (data) =>{
                console.log(data);
            }
        )
    }
}
