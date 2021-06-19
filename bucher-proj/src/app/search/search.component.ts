import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router, RouterModule} from '@angular/router';
import {CityService} from '../services/city/city.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  inputValue = '';

  valid: boolean = false;

  data = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    public cityService: CityService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cityService.getAllCities().then(r => {
      this.data = r;
    });
  }

  public selectEvent(val: string): void {
    this.inputValue = val;
    console.log('select');
    this.valid = true;
  }

  public onChangeSearch(val: string): void {
    console.log('change')
    this.inputValue = val;
    this.valid = false;
  }

  public onFocused(e): void{
    // do something when input is focused
  }


  public buttonSearchClicked(): void {

    this.cityService.addToSearchHistory(this.inputValue);
    console.log('added to search history')
    console.log(this.cityService.getSearchHistory())

    const params: Params = {
      name: this.inputValue
    };

    this.router.navigate(['/city-search'], {
      queryParams: params
    });


  }

}
