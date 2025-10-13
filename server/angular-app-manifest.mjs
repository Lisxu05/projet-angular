
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/projet-angular/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/projet-angular"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 456, hash: '79c1617480fadf5c69c0514713bf9fafe86e779da706e6a0db9ea9dc57bbb406', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 969, hash: '6e638e8a9ea899ccc27fd2b700270deedc00e45db2b7952bf6ff723ee8e1fa35', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 21597, hash: '548b56b3ca8175736eb312b055b7f847021fced8419f01b0a250d049b006cfa7', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
