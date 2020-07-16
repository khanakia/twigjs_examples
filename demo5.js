const Twig = require('twig')
const {twig } = Twig

var template = twig({
  path: 'views/demo5/page.twig',
  async: false,
  allowInlineIncludes: true,
  namespaces: { 
    'base': '/Volumes/D/www/js/twigjs_examples/views/demo5/',
  },
  load(template) {
    const output = template.render();
    console.log(output)
  },
  error(e) {
    console.log(e)
  }
});