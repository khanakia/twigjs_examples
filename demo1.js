const Twig = require('twig')
const {twig } = Twig

var template = twig({
  path: 'views/demo1/index.twig',
  load(template) {
    const output = template.render();
    console.log(output)
  },
  error(e) {
    console.log(e)
  }
});