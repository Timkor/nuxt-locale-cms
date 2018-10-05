import Vue from 'vue';


require('codemirror/lib/codemirror.css'); // codemirror
require('tui-editor/dist/tui-editor.css'); // editor ui
require('tui-editor/dist/tui-editor-contents.css'); // editor content
require('highlight.js/styles/github.css'); // code block highlight

var Editor = require('tui-editor');

Vue.prototype.$createTuiEditor = function (element, value) {
    return new Editor({
        el: element,
        initialValue: value,
        initialEditType: 'wysiwyg',
        previewStyle: 'vertical',
        height: '100%'
    });
}

