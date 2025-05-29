
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://badismahjoubi.github.io/angularportfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/angularportfolio"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 548, hash: 'e39674d59bd718b58c7471324afedc38d5f2cc579a9aa60dfcb029ecdca1aa8f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1061, hash: '63596abbafa95e66e4ffc439051565d0a8cfdb0b901c07b61d0db83211def414', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 718, hash: 'c3f51a06d723cb60a0f18456d868acde1a7f902ee04a5fc5323e1f46c23d201f', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
