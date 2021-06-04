import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuickAccessComponent } from './quick-access/quick-access.component';
import { CitySearchComponent } from './city-search/city-search.component';
import { CountrySearchComponent } from './country-search/country-search.component';

@NgModule({
  declarations: [
    AppComponent,
    QuickAccessComponent,
    CitySearchComponent,
    CountrySearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
