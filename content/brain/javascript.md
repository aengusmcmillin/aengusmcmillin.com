---
title: "Javascript"
---

- Tags: [[What I Know]] [[Languages]] [[Web Development]]
- **Syntax**
  - **Imports**
    - CommonJS: `const foo = require('foolib');`
    - ES6: `import foo from 'foolib';`
  - **Functions**
    - There are a couple of main ways of defining functions:
    - Named declarations: `function foo(bar) {}`
    - Named expressions: `const func = function foo(bar) {foo(bar.baz)}`
    - Anonymous expressions: `const func = function(bar) {}`
    - Arrow: `(args) => {}` or `arg => arg.something()`}
  - **Objects**
    - Javascript is based around an Object model
    - Objects are essentially key value pairs, they can be accessed with dot syntax or bracket syntax
    - Can be created either with `{}` or `new Object()`
    - Examples:
     ```var person = new Object()
        person.firstName = "Homer"
        person.lastName = "Simpson"

        var neighbor = {}
        neighbor['firstName'] = "Ned"
        neighbor['lastName'] = "Flanders"
        neighbor['catchPhrase'] = "Hi Diddly Ho Neighborino"
    - Complex objects containing nested objects and lists can be constructed using `{}` and `[]` constructs
     ```var brainData = {
            metadata: {
                title: 'My Brain',
                author: 'Aengus McMillin,
            },
            languages: [
                'javascript',
                'c#',
            ],
            published: true,
        }
- **CommonJS vs ES6 Modules**
  - It seems CommonJS is still used regularly in Node and the server side, whereas ES6 is becoming more standard for front end development
  - Gatsby doesn't seem to totally work with ES6 modules
  - VSCode recommends switching, this can only be disabled by adding a line to user/workspace settings
    - `"javascript.validate.enable": false`
- **References**
  - [Mozilla Javascript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)

