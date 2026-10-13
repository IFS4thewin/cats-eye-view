import { createRequire } from 'module';

const require = createRequire(import.meta.url);

export { default } from './server/standalone/vite.config.js';
// Preserve existing test and tooling imports while provider modules are split.
export * from './server/providers/local.js';
