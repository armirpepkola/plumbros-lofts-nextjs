import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    // --- THIS IS THE NEW, CRUCIAL PART ---
    // This new object's only job is to override the rules from the extends.
    rules: {
      // This turns off the rule that requires you to escape apostrophes.
      "react/no-unescaped-entities": "off", 
      
      // This turns off the rule that forbids using the 'any' type.
      "@typescript-eslint/no-explicit-any": "off",
    },
  },

  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
];

export default eslintConfig;
