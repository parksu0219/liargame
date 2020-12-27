/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const fs = require("fs")

// MEME(PARK):"yarn develop"할떄, 사용
// exports.onCreateWebpackConfig = ({ stage, actions, getConfig }) => {
//   actions.setWebpackConfig({
//     externals: getConfig().externals.concat(function(context, request, callback) {
//       const regex = /firebase(\/([\w\d]+))*/;
//       // const regex = /^@?firebase(\/(.+))?/;
//       if (regex.test(request)) {
//         return callback(null, `umd ${request}`);
//       }
//       callback();
//     }),
//   });
// };

// MEME(PARK):"yarn deploy"할떄, 사용
exports.onCreateWebpackConfig = ({ stage, actions, getConfig }) => {
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      // Don't bundle modules that reference browser globals such as `window` and `IDBIndex` during SSR.
      // See: https://github.com/gatsbyjs/gatsby/issues/17725
      externals: getConfig().externals.concat(function(_context, request, callback) {
        // Exclude bundling firebase* and react-firebase*
        // These are instead required at runtime.
        if (/^@?(react-)?firebase(.*)/.test(request)) {
          console.log('Excluding bundling of: ' + request);
          return callback(null, 'umd ' + request);
        }
        callback();
      }),
    });
  }
};

exports.onPostBuild = () => {
  fs.copyFile(`./firebase.json`, `./public/firebase.json`, err => {
    if (err) {
      throw err
    }
  })
}

exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions
  // Make the front page match everything client side.
  // Normally your paths should be a bit more judicious.
  if (page.path === `/`) {
    page.matchPath = `/*`
    createPage(page)
  }
}