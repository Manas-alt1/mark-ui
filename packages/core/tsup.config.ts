import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: false,
  minify: true,
  external: ['react', 'react-dom', 'framer-motion'],
  banner: {
    js: "'use client';",
  },
  outExtension({ format }) {
    return {
      js: format === 'cjs' ? '.cjs' : '.js',
    };
  },
  // No need to exclude tailwindcss explicitly if it's not imported in TS files
  // but let's be safe.
  noExternal: [],
});
