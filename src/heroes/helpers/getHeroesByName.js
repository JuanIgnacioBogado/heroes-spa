import { heroes } from '../data/heroes';

const formatText = text => text.toLowerCase().trim();

export const getHeroesByName = name =>
  heroes.filter(({ superhero }) =>
    formatText(superhero).includes(formatText(name))
  );
