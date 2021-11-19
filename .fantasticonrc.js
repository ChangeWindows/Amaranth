module.exports = {
  inputDir: './icons',
  outputDir: './dist',
  fontTypes: ['ttf', 'woff', 'woff2', 'eot'],
  assetTypes: ['css', 'scss', 'html'],
  fontsUrl: '.',
  name: 'Amaranth',
  prefix: 'ai',
  selector: '.ai',
  normalize: true,
  descent: 35,
  templates: {
    html: './templates/html.hbs',
    css: './templates/css.hbs',
    scss: './templates/css.hbs'
  },
  pathOptions: {
    eot: './dist/fonts/Amaranth.eot',
    ttf: './dist/fonts/Amaranth.ttf',
    woff: './dist/fonts/Amaranth.woff',
    woff2: './dist/fonts/Amaranth.woff2',
    css: './dist/fonts/Amaranth.css',
    scss: './dist/fonts/Amaranth.scss',
    html: './docs/Amaranth.html'
  }
};