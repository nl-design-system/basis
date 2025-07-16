import type { Preprocessor } from 'style-dictionary/types';

/**
 * Style Dictionary preprocessor to remove all tokens that start with "color-scheme-".
 *
 * This is used to create a default color scheme configuration.
 *
 * Register with:
 * StyleDictionary.registerPreprocessor(colorSchemeDefaultPreprocessor);
 */
export const colorSchemeDefaultPreprocessor: Preprocessor = {
  name: 'color-scheme-default',
  preprocessor(dictionary) {
    Object.keys(dictionary).forEach((key) => {
      if (key.startsWith('color-scheme-')) {
        /* eslint-disable-next-line @typescript-eslint/no-dynamic-delete */
        delete dictionary[key];
      }
    });

    return dictionary;
  },
};
