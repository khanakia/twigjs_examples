const Twig = require('twig')
const {twig } = Twig

// Namespaces - using Data

var template = twig({
  data: "{% include '@my-project1/index.twig' %}",
  namespaces: { 
    'my-project1': '/Volumes/D/www/js/twigjs_examples/views/project1/',
    'my-project2': './views/project2/'  // Relative path
  }
});

console.log(template.render())