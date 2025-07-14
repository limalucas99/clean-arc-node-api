module.exports = (async function config() {
  const { default: love } = await import('eslint-config-love')
  
  return [
    {
      ...love,
      rules: {
        ...love.rules,
        '@typescript-eslint/no-magic-numbers': 'off',
        '@typescript-eslint/class-methods-use-this': 'off',
        'eslint-comments/require-description': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        
      },
      files: ['**/*.js', '**/*.ts'],
      ignores: ["dist/**", "node_modules/**"],
    },
  ]
})()