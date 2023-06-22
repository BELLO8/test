/* eslint-disable no-param-reassign */

const creatorData = {
  chiselVersion: '1.0.0',
  app: {
    name: 'Blog',
    author: 'Kader Adetoudji',
    projectType: 'fe',
    browsers: ['modern', 'edge18'],
    nameSlug: 'blog',
    hasJQuery: false,
  },
  fe: { additionalFeatures: ['serveDist', 'skipHtmlExtension'] },
};

module.exports = {
  creatorData,

  staticFrontend: {
    serveDist: true,
    skipHtmlExtension: true,
  },

  // To use React and hot reload for React components:
  // 1. Run `yarn add react-hot-loader @hot-loader/react-dom`
  // 3. Mark your root component as hot-exported as described on
  //    https://github.com/gaearon/react-hot-loader#getting-started (step 2)
  // 4. Uncomment line below
  // react: true,

  plugins: ['chisel-plugin-code-style', 'chisel-plugin-static-frontend'],
};
