import {Links} from "../links";
import {Categories} from "./categories";

export interface Score {
  _links: Links;
  categories: Array<Categories>;
  summary: string;
  teleport_city_score: number;
}
