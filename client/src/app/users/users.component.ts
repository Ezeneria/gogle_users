import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
    selector: 'app-my',
    templateUrl: './my-app.component.html',
    styleUrls: ['./my-app.component.css']
})
export class MyComponent {

    constructor(private httpClient:HttpClient){

    }
    getprofile(){
        this.httpClient.get('https://api.github.com/users/1')
            .subscribe(
                (data:any[]) => {
                    console.log(data);
                }
            )
    }

}
