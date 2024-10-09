export interface PokeFirstReqType {
  count: number;
  next: string;
  prev: string | null;
  results: {
    name: string;
    url: string;
  }[];
}

export interface AbilitiesType {
  ability: { name: string };
}

export interface SpritesType {
  other: {
    'official-artwork': { front_default: string };
  };
  back_default: string;
  front_default: string;
  front_shiny: string;
  back_shiny: string;
}

export interface StatsType {
  base_stat: number;
  stat: { name: string };
}

export interface TypeType {
  slot: number;
  type: { name: string };
}

export interface TypesType {
  slot: number;
  type: {
    name: string;
  };
}

export interface PokeDefaultType {
  id: number;
  name: string;
  height: number;
  weight: number;
  base_experience: number;
  abilities: AbilitiesType[];
  sprites: SpritesType;
  stats: StatsType[];
  types: TypesType[];
}
