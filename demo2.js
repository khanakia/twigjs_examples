const Twig = require('twig')
const {twig } = Twig

// INCLINE Include
/**
 * You can also include the full relative path '/Volumes/D/www/js/twigjs_examples/views/demo1/index.twig'
 */

var template = twig({
  allowInlineIncludes: true,
  data: "{% include './views/demo1/index.twig' %}",
  load(template) {
    const output = template.render();
    console.log(output)
    // return template
  },
  error(e) {
    console.log(e)
  }
}).render();

console.log(template)