{
  test: /\.sass$/,
  use: [
    'vue-style-loader',
    'css-loader',
    {
      loader: 'sass-loader',
      options: {
        indentedSyntax: true,
        sassOptions: {
          indentedSyntax: true
        }
      }
    }
  ]
}