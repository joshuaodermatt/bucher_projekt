import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {JsonObject} from '@angular/compiler-cli/ngcc/src/packages/entry_point';
import {Score} from '../../dtos/score/score';
import {Cities} from "../../dtos/city/cities";

@Injectable({
  providedIn: 'root'
})
export class CityService {

  searchHistory: string[] = [];

  constructor(private http: HttpClient) {

  }

  public async getUaLinkByName(cityName: string): Promise<string> {
    const url = 'https://api.teleport.org/api/urban_areas/';

    const params = new HttpParams().set('search', name);
    const response = await this.http.get<Cities>(url, { params }).toPromise();

    let uaLink: string = '';
    response._links['ua:item'].forEach(elem => {
      if (cityName === elem.name) {
        uaLink =  elem.href;
      }
    });

    return uaLink;
  }

  public async getUaStats(uaLink: string): Promise<Score> {
    return  await this.http.get<Score>(uaLink + 'scores/').toPromise();
  }

  public async getAllCities(): Promise<Array<string>> {
    const url = 'https://api.teleport.org/api/urban_areas/';

    const params = new HttpParams().set('search', name);
    const response = await this.http.get<Cities>(url, { params }).toPromise();

    const res = [];

    response._links['ua:item'].forEach(elem => {
      res.push(elem.name);
    });

    return res;
  }


  addToSearchHistory(cityName: string): void {
    this.searchHistory.push(cityName);
  }

  getSearchHistory(): string[] {
    return this.searchHistory;
  }
}
