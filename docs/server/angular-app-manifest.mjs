
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/angular-portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/angular-portfolio"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 518, hash: '25e4f1d69413e69d77df77e3e9a01e8726818ab42ecf506d1b2ac1c8b6f49c3e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1031, hash: '60e35312aac02311216438c2cb600c3feb46552840b7d1fee12aa70289c1c595', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 688, hash: '259434e1b220db62861748238ecbfb69606d782daa936c8f181a8067f760ec68', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
