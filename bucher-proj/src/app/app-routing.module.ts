import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {QuickAccessComponent} from "./quick-access/quick-access.component";
import {CountrySearchComponent} from "./country-search/country-search.component";
import {CitySearchComponent} from "./city-search/city-search.component";
import {SearchComponent} from "./search/search.component";

const routes: Routes = [
  {path: 'quick-access', component: QuickAccessComponent},
  {path: 'city-search', component: CitySearchComponent},
  {path: 'search', component: SearchComponent},
  {path: '', redirectTo: 'quick-access', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
