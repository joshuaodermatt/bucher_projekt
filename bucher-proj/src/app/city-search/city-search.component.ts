import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CityService} from "../services/city/city.service";
import {Score} from "../dtos/score/score";

@Component({
  selector: 'app-city-search',
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.scss']
})
export class CitySearchComponent implements OnInit {

  title = '';
  scores: Score;
  summary: string;
  totalScore: number;

  barChartOptions = {
    responsive: true,
    scales: {
      x: {
        min: 0,
        max: 10
      },
      y: {
        min: 0,
        max: 10
      }
    }
  };

  barChartLabels = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

  barChartData = [

  ];

  barChartType = 'horizontalBar';

  barChartLegend = false;

  constructor(
    public activatedRoute: ActivatedRoute,
    public cityService: CityService
  ) { }

  ngOnInit(): void {
    let cityName: string;
    this.activatedRoute.queryParams.subscribe(params => {
      cityName = params.name;
    });
    this.title = cityName;

    this.fetchData(cityName).then(() => {
      this.prepareChart();
    });
  }

  private async fetchData(cityName: string): Promise<void> {
    const uaLink: string = await this.cityService.getUaLinkByName(cityName);

    this.scores = await this.cityService.getUaStats(uaLink);

    this.summary = this.scores.summary.replace(/(<([^>]+)>)/ig, '');

    this.totalScore = Math.floor(this.scores.teleport_city_score);
  }

  private prepareChart(): void {
    const labels = [];
    const data = [];

    this.scores.categories.forEach((score) => {
      labels.push(score.name);
      data.push(score.score_out_of_10);
    });

    data.push('scores')

    this.barChartData.push({
      data
    });
    this.barChartLabels = labels;

  }
}
