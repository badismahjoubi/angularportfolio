
export default {
  basePath: 'https://badismahjoubi.github.io/angularportfolio',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
