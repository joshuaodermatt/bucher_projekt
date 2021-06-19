import {Curies} from "./curies";
import {Self} from "./self";
import {UaItem} from "./city/uaItem";

export interface Links {
  curies: Array<Curies>;
  self: Self;
  ['ua_item']: UaItem
}
