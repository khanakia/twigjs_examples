const Twig = require('twig')
const {twig } = Twig

var template = twig({
  base: 'views/demo1',
  path: 'index.twig',
  load(template) {
    const output = template.render();
    console.log(output)
  },
  error(e) {
    console.log(e)
  }
});