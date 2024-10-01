interface PokeSimpleType {
  name: string;
  url: string;
}

interface AbilitiesType {
  ability: { name: string };
}

interface SpritesType {
  back_default: string;
  front_default: string;
}

interface StatsType {
  base_stat: number;
  stat: { name: string };
}

interface TypesType {
  types: { name: string };
}

interface PokeDefaultType {
  id: number;
  name: string;
  height: number;
  weight: number;
  base_experience: number;
  abilities: AbilitiesType;
  sprites: SpritesType;
  stats: StatsType;
  types: TypesType;
}
