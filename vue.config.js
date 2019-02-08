// module.exports = {
//   devServer: {
//     https: true,
//   },
// };


module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: '@import "@/styles/extend/_variables.sass";',
      },
    },
  },
};
