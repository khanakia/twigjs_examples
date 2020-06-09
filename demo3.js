const Twig = require('twig')
const {twig } = Twig

// Namespaces

var template = twig({
  path: 'views/demo3/index.twig',
  async: false,
  allowInlineIncludes: true,
  namespaces: { 
    'my-project1': '/Volumes/D/www/js/twigjs_examples/views/project1/',
    'my-project2': './views/project2/'  // Relative path
  },
  load(template) {
    const output = template.render();
    console.log(output)
  },
  error(e) {
    console.log(e)
  }
});