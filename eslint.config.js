module.exports = (async function config() {
  const { default: love } = await import('eslint-config-love')
  
  return [
    {
      ...love,
      rules: {
        ...love.rules,
        '@typescript-eslint/no-magic-numbers': 'off', // TODO - Enable this rule
        '@typescript-eslint/class-methods-use-this': 'off',
        'eslint-comments/require-description': 'off', // TODO - Enable this rule
        '@typescript-eslint/no-explicit-any': 'off', // TODO - Enable this rule
        '@typescript-eslint/strict-boolean-expressions': 'off', 
        '@typescript-eslint/no-unsafe-member-access': 'off', // TODO - Enable this rule
        '@typescript-eslint/method-signature-style': 'off', 
        '@typescript-eslint/no-unsafe-argument': 'off', // TODO - Enable this rule
        '@typescript-eslint/no-unsafe-assignment': 'off', // TODO - Enable this rule
        '@typescript-eslint/prefer-destructuring': 'off', // TODO - Enable this rule
        'promise/avoid-new': 'off',
      },
      files: ['**/*.js', '**/*.ts'],
      ignores: ["dist/**", "node_modules/**", "coverage/**"],
    },
  ]
})()