import type { Preprocessor } from 'style-dictionary/types';

/**
 * Style Dictionary preprocessor to include only tokens that belong to the "color-scheme-dark" tokenset.
 * This is used to create a dark color scheme configuration.
 *
 * Register with:
 * StyleDictionary.registerPreprocessor(colorSchemeDarkPreprocessor);
 */
export const colorSchemeDarkPreprocessor: Preprocessor = {
  name: 'color-scheme-dark',
  preprocessor(dictionary) {
    Object.keys(dictionary).forEach((key) => {
      if (!key.startsWith('color-scheme-dark/')) {
        /* eslint-disable-next-line @typescript-eslint/no-dynamic-delete */
        delete dictionary[key];
      }
    });

    return dictionary;
  },
};
