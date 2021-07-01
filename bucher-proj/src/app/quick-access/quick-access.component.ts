import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CityService} from "../services/city/city.service";

@Component({
  selector: 'app-quick-access',
  templateUrl: './quick-access.component.html',
  styleUrls: ['./quick-access.component.scss']
})
export class QuickAccessComponent implements OnInit {

  searchHistory: string[] = [];

  constructor(
    public cityService: CityService,
    public router: Router
    ) { }

  ngOnInit(): void {
    this.searchHistory = this.cityService.getSearchHistory();
    console.log(this.cityService.searchHistory);
  }

  async navigateToCitySearch(cityName) {
    await this.router.navigateByUrl('/city-search?name=' + cityName)
  }

}
