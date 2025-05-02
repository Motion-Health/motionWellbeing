const glob = require('glob');
const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

// List all files in the pages directory
const pages = glob.sync('src/pages/**/*.tsx');

// Filter out undesired files (e.g., _app.js, _document.js, etc.)
const routes = pages
  .filter((page) => !page.includes('_'))
  .filter((page) => !page.includes('404'))
  .map((page) => `/${page.split('/').slice(2).join('/').replace('.tsx', '')}`)
  .map((route) => (route.endsWith('/index') ? route.slice(0, -6) : route));

let sitemap = new SitemapStream({
  hostname: 'https://motion.org.uk',
});

routes.forEach((route) => {
  sitemap.write({
    url: route,
    changefreq: 'hourly',
    priority: 0.7,
  });
});

sitemap.end();

// Pipe the sitemap to a file
streamToPromise(sitemap)
  .then((sitemap) => {
    createWriteStream('./public/sitemap.xml').write(sitemap.toString());
  })
  .catch(console.error);
