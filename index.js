/**
 * built by slashhuang
 * ie8 projects babelrc using es2015
 */

 module.exports = {
    "presets": [
        require("babel-preset-es2015"),
        require("babel-preset-react"),
        require("babel-preset-stage-0")
    ],
    "plugins": [
        require("babel-plugin-add-module-exports"),
        require("transform-es3-property-literals"),
        require("transform-es3-member-expression-literals")
    ]
};