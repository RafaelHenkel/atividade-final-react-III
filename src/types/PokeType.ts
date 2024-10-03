export interface PokeFirstReqType {
  count: number;
  next: string;
  prev: string | null;
  result: {
    name: string;
    url: string;
  }[];
}

export interface AbilitiesType {
  ability: { name: string };
}

export interface SpritesType {
  back_default: string;
  front_default: string;
  front_shiny: string;
  back_shiny: string;
}

export interface StatsType {
  base_stat: number;
  stat: { name: string };
}

export interface TypesType {
  types: { name: string; base_stat: number };
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
  types: TypesType;
}
