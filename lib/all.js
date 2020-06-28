const CodeMirror = require('codemirror')

// Register extension
require('@emmetio/codemirror-plugin')(CodeMirror)

// Languages
require('../modes/css/css')
require('../modes/javascript/javascript')
require('../modes/php/php')
require('../modes/xml/xml')
require('../modes/htmlmixed/htmlmixed')

// These extend CodeMirror from node_modules

require('codemirror/addon/dialog/dialog')
require('codemirror/addon/display/fullscreen')

require('codemirror/addon/edit/closebrackets')
require('codemirror/addon/edit/matchbrackets')

require('codemirror/addon/edit/closetag')
require('codemirror/addon/edit/matchtags')

require('codemirror/addon/fold/xml-fold')

require('codemirror/addon/search/search')
require('codemirror/addon/search/searchcursor')
require('codemirror/addon/search/jump-to-line')

require('codemirror/addon/search/matchesonscrollbar')
require('codemirror/addon/scroll/annotatescrollbar')
require('codemirror/addon/scroll/simplescrollbars')

require('codemirror/addon/selection/active-line')

// Hint

require('codemirror/addon/hint/show-hint') // with show-hint.scss
require('codemirror/addon/hint/css-hint')
require('./scss-hint')

// Depends on htmlhint.min.js
require('codemirror/addon/hint/xml-hint')
require('codemirror/addon/hint/html-hint')

// Depends on jshint.min.js
require('codemirror/addon/hint/javascript-hint')

// Lint
require('codemirror/addon/lint/lint') // with lint.scss
require('codemirror/addon/lint/html-lint')

// Depends on csslint.min.css
require('codemirror/addon/lint/css-lint')
require('./scss-lint')

require('codemirror/addon/lint/javascript-lint')
require('codemirror/addon/lint/json-lint')

module.exports = CodeMirror