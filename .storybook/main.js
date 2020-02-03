module.exports = {
  stories: ['../stories/**/*.stories.js'],
  webpackFinal: async config => {
    // do mutation to the config

    return config;
  },
};
