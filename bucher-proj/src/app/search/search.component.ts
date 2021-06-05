import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public mode: string;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      if (params.mode === 'city' || params.mode === 'country') {
        this.mode = params.mode;
      } else {
        this.mode = 'city';
      }
      console.log(this.mode);
    });
  }

}
