import { Component, OnInit } from '@angular/core';
import {CityService} from "../services/city/city.service";

@Component({
  selector: 'app-quick-access',
  templateUrl: './quick-access.component.html',
  styleUrls: ['./quick-access.component.scss']
})
export class QuickAccessComponent implements OnInit {

  searchHistory: string[] = [];

  constructor(public cityService: CityService) { }

  ngOnInit(): void {
    this.searchHistory = this.cityService.getSearchHistory();
    console.log(this.cityService.searchHistory);
  }

}
