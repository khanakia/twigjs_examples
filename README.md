## Twig.js Examples - https://github.com/twigjs/twig.js

#### Demo1 using Path - ```node demo1.js```
```
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
```

#### Demo2 using Data Inline Includes - ```node demo2.js```
```
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
```

#### Demo3 Namespaces using Path - ```node demo3.js```
```
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
```

#### Demo4 Namespaces using Data - ```node demo4.js```
```
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
```
