import { visualRegressionPlugin } from '@web/test-runner-visual-regression/plugin';
import { esbuildPlugin } from '@web/dev-server-esbuild';

export default {
  plugins: [
    esbuildPlugin({ loaders: { '.js': 'ts' }, target: 'auto' }),
    visualRegressionPlugin({
      manual: process.argv.includes('--manual'),
      update: process.argv.includes('--update-visual-baseline'),
    }),
  ],
};
