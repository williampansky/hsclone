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
          styles: './src/styles',
          utils: './src/utils'
        }
      }
    ]
  ]
};
