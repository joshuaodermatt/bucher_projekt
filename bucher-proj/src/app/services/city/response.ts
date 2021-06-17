export interface Response {
  _links: Links;
}

export interface Links {
  curies: Array<Curies>;
  self: Self;
  ['ua:item']: Array<UaItem>;
  categories: Array<Score>;
}


export interface Curies {
  href: string;
  name: string;
  template: boolean;
}

export interface Self {
  href: string;
}

export interface UaItem {
  href: string;
  name: string;
}

export interface Score {
  color: string;
  name: string;
  score_out_of_10: number;
}
