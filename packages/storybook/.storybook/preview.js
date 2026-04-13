import { useEffect } from '@storybook/client-api';

export const parameters = {
  docs: {
    source: {
      state: 'open',
    },
  },
  layout: 'none', // disable default 'padded'
};

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'CXL UI theme',
    defaultValue: 'cxl-ui-neo-brutal',
    toolbar: {
      icon: 'paintbrush',
      items: [
        { value: 'cxl-ui-neo-brutal', title: 'Neo Brutal' },
        { value: 'original', title: 'Original' },
      ],
      showName: true,
    },
  },
};

export const decorators = [
  (Story, context) => {
    const theme = context.globals.theme;

    useEffect(() => {
      const el = document.querySelector('cxl-app-layout');

      if (el) {
        if (theme && theme !== 'original') {
          // Append theme value without removing existing theme tokens.
          const current = el.getAttribute('theme') || '';
          const tokens = current.split(/\s+/).filter(Boolean);

          if (!tokens.includes(theme)) {
            el.setAttribute('theme', [...tokens, theme].join(' '));
          }
        } else {
          // Remove neo-brutal token, keep any others.
          const current = el.getAttribute('theme') || '';
          const cleaned = current
            .split(/\s+/)
            .filter((t) => t && t !== 'cxl-ui-neo-brutal')
            .join(' ');

          el.setAttribute('theme', cleaned);
        }
      }
    });

    return Story();
  },
];
