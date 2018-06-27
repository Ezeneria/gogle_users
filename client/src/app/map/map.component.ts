import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  latitude = 51.67841;
  longitude = 7.809;
  onChoseLocation(event){
    console.log(event)
  }
  constructor() { }

  ngOnInit() {
  }

}
