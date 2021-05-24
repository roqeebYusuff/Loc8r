// import { Loc8rDataService } from './../loc8r-data.service';
import { Component, OnInit } from '@angular/core';
import {Loc8rDataService} from './../loc8r-data.service';

export class Location{
  id: string;
  name: string;
  distance: number;
  address: string;
  rating: number;
  facilities: string[];
}

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css']
})
export class HomeListComponent implements OnInit {

  constructor(private loc8rDataService: Loc8rDataService) { }

  public locations: Location[];
  private getLocations

  // locations: Location[] = [{
  //     id: '5ff5d6168d973a140845c619',
  //     name: 'Costy',
  //     distance: 14.0,
  //     address: 'High Street, Reading',
  //     rating: 3,
  //     facilities: ['hot drinks', 'food', 'power']
  //   },{
  //     id: '5ff5d6168d973a140845c619',
  //     name: 'Roqeeb',
  //     distance: 14.0,
  //     address: 'High Street, Reading',
  //     rating: 3,
  //     facilities: ['hot drinks', 'food', 'power']
  //   }
  // ];

  ngOnInit(): void {
  }

}
