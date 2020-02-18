module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ]
  ],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          components: './src/components',
          config: './src/config',
          data: './src/data',
          enums: './src/enums',
          lib: './src/lib',
          moves: './src/lib/moves',
          styles: './src/styles',
          utils: './src/utils'
        }
      }
    ]
  ]
};
