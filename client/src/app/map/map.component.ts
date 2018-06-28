import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {


  onChoseLocation(event){
    console.log(event)
  }
  constructor(private route: ActivatedRoute) { }
  id: string;
  name: string;
  lat: number;
  lng: number;
  ngOnInit() {

    this.id = this.route.snapshot.params['id'];
    this.name = this.route.snapshot.queryParams['name'];
    this.lat = +this.route.snapshot.queryParams['lat'];
    this.lng = +this.route.snapshot.queryParams['lng'];

    this.route.params.subscribe((params: Params) => {
      console.log(params);
    });
  }

}
