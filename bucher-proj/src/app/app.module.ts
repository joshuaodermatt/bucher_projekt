import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuickAccessComponent } from './quick-access/quick-access.component';
import { CitySearchComponent } from './city-search/city-search.component';
import { CountrySearchComponent } from './country-search/country-search.component';
import { SearchComponent } from './search/search.component';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import {HttpClientModule} from "@angular/common/http";
import {ChartsModule} from "ng2-charts";
import {CityService} from "./services/city/city.service";

@NgModule({
  declarations: [
    AppComponent,
    QuickAccessComponent,
    CitySearchComponent,
    CountrySearchComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AutocompleteLibModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [
    CityService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
