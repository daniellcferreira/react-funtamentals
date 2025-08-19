const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // Ponto de entrada do aplicativo
  entry: "./src/index.js",
  // Configuração de saida
  output: {
    // Caminho do arquivo de saída
    path: path.resolve(__dirname, "dist"),
    // Nome do arquivo de saída
    filename: "bundle.js",
  },
  // Configurações do modulo
  module: {
    rule: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  // Lista de plugins do Webpack
  plugins: [
    new HtmlWebpackPlugin({
      // Template HTML a ser usado
      template: "./public/index.html",
    }),
  ],
  // Configurações de resolução de módulos
  resolve: {
    extensions: [".js", ".jsx"],
  },
  // Configurações do servidor de desenvolvimento
  devServer: {
    // Configuração de arquivos estáticos a serem servidos
    static: {
      // Diretório de arquivos estáticos
      directory: path.join(__dirname, "dist"),
    },
    // Porta do servidor de desenvolvimento
    port: 3000,

  }
};
