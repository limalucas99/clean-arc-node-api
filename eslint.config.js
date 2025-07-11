module.exports = (async function config() {
  const { default: love } = await import('eslint-config-love')
  
  return [
    {
      ...love,
      rules: {
        ...love.rules,
      },
      files: ['**/*.js', '**/*.ts'],
      ignores: ["dist/**", "node_modules/**"],
    },
  ]
})()