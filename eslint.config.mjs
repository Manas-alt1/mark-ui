import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    files: ["app/docs/**/*.tsx"],
    rules: {
      "react/no-unescaped-entities": "off",
    },
  },
  {
    files: ["packages/core/src/components/display/Avatar/Avatar.tsx"],
    rules: {
      "@next/next/no-img-element": "off",
    },
  },
  {
    files: ["app/layout.tsx"],
    rules: {
      "@next/next/no-page-custom-font": "off",
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
