
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://Lisxu05.github.io/projet-angular',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/projet-angular"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 480, hash: '4f9c7da2adf20f2d76c226b80aa56e00eaa879da645890235b5c1c0c91393331', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 993, hash: 'dc816c1cedd224f1a89471a4d9d793dc4296e322b68ac4cbb96a7e6e34a4ffd5', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 21621, hash: 'b02303ba457d4fec93281bd94c791684de096d99c5e5c101156ef5bf4883d181', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
