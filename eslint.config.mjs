// import { dirname } from "path";
// import { fileURLToPath } from "url";
// import { FlatCompat } from "@eslint/eslintrc";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// const compat = new FlatCompat({
//   baseDirectory: __dirname,
// });

// const eslintConfig = [...compat.extends("next/core-web-vitals")];

// export default eslintConfig;

// eslint.config.mjs corregido
import nextPlugin from "@next/eslint-plugin-next";

export default [
  {
    // Configuración para Next.js (reemplazando FlatCompat)
    plugins: {
      "@next/next": nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      "@next/next/no-html-link-for-pages": "error",
    },
    settings: {
      next: {
        rootDir: "./",
      },
    },
  },
];