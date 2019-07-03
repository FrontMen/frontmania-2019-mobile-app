import { dark as darkTheme, mapping } from '@eva-design/eva';

// TODO: figure out a way to customize these colors, they have a mapping system
export const evaTheme = {
  ...darkTheme,
};

// TODO: after figuring out the mapping system, use the actual evaTheme here
// export const theme = _.mapKeys(evaTheme, (value, key) => _.camelCase(key));
export const theme = {
  backgroundBasicColor1: '#222b45',
};

export const evaMapping = mapping;
