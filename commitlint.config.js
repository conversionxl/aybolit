const fs = require('fs');

module.exports = {
  extends: ['@commitlint/config-conventional', '@commitlint/config-lerna-scopes'],
  rules: {
    'web-component-rule': [2, 'always'],
  },
  plugins: [
    {
      rules: {
        'web-component-rule': ({ scope, subject }) => {
          if (scope) {
            const matches = subject.match(/(?<=\[).+?(?=\])/g);

            // No web component has been specified
            if (!matches) {
              return [false, 'You must specify a web component'];
            }

            // Check if the web component exists
            const paths = [
              `packages/${scope}/src/components/${matches[0]}.js`,
              `packages/${scope}/src/components/${matches[0]}/index.js`,
            ];

            const exists = paths.some((path) => fs.existsSync(path));

            if (!exists) {
              return [false, `The web component ${matches[0]} does not exist`];
            }

            return [true];
          }
          return [true];
        },
      },
    },
  ],
};
