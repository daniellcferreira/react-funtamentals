# React Babel Webpack Example

![React](https://img.shields.io/badge/React-Biblioteca%20UI-61DAFB?style=flat-square&logo=react)
![Webpack](https://img.shields.io/badge/Webpack-Bundler-8DD6F9?style=flat-square&logo=webpack)
![Babel](https://img.shields.io/badge/Babel-Transpiler-F9DC3E?style=flat-square&logo=babel)
![Node.js](https://img.shields.io/badge/Node.js-Execução%20JS-339933?style=flat-square&logo=node.js)
![NPM](https://img.shields.io/badge/NPM-Gerenciador%20Pacotes-CB3837?style=flat-square&logo=npm)

## Descrição

Este projeto é um exemplo **educacional** de como configurar manualmente um ambiente React utilizando **Webpack** como bundler e **Babel** como transpiler.  
A ideia é entender os conceitos fundamentais por trás de ferramentas modernas de build, sem depender de scaffolds como o _Create React App_.

## Funcionalidades

- Estrutura básica de um projeto React.
- Renderização de componentes com JSX.
- Configuração do Webpack com suporte a:
  - `babel-loader` para transpilar ES6+ e JSX.
  - `html-webpack-plugin` para injetar o bundle no `index.html`.
  - `webpack-dev-server` para ambiente de desenvolvimento com hot reload.
- Configuração do Babel com presets para **JavaScript moderno** e **React**.
- Scripts no `package.json` para desenvolvimento e build de produção.
