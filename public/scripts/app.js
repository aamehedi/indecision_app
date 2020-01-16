"use strict";

console.log('app is running!');
var appRoot = document.getElementById('app');

var render = function render() {
  var template = React.createElement("div", null, React.createElement("h1", null, app.title), React.createElement("h3", null, app.subtitle), React.createElement("p", null, app.options.length ? app.optionTitle : app.noOptionTitle), React.createElement("button", {
    disabled: !app.options.length,
    onClick: onMakeDecision
  }, "What should I do?"), React.createElement("button", {
    onClick: onRemoveAll
  }, "Remove All"), React.createElement("ol", null, app.options.map(function (option, index) {
    return React.createElement("li", {
      key: index
    }, option);
  })), React.createElement("form", {
    onSubmit: onFormSubmit
  }, React.createElement("input", {
    type: "text",
    name: "option"
  }), React.createElement("input", {
    type: "submit",
    value: "Add Option"
  })));
  ReactDOM.render(template, appRoot);
};

var app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of computer',
  optionTitle: 'Here are your options',
  noOptionTitle: 'No options',
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  var option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    render();
  }
};

var onMakeDecision = function onMakeDecision() {
  var randomNum = Math.floor(Math.random() * app.options.length);
  var option = app.options[randomNum];
  if (option) alert(option);
};

var onRemoveAll = function onRemoveAll() {
  app.options = [];
  render();
};

render();
