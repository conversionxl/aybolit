import { addParameters, addDecorator } from '@storybook/web-components';
import { initializeWorker, mswDecorator } from 'msw-storybook-addon';

addParameters({
  layout: 'none', // disable default 'padded'
});

initializeWorker();
addDecorator(mswDecorator);
