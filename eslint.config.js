import js from '@eslint/js'
import reactHooks from 'eslint-plugin-react-hooks'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist/**', 'build/**', 'node_modules/**'] },
  js.configs.recommended,
  tseslint.configs.recommended,
  // The bare `configs.recommended` export is still eslintrc-shaped; the flat
  // namespace is the one ESLint 9+ understands.
  reactHooks.configs.flat.recommended,
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2022,
      globals: {
        ...globals.browser,
        ...globals.serviceworker,
      },
    },
  },
)
