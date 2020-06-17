const assert = require('assert');
const { Given, When, Then } = require('cucumber');
const { browser } = require('protractor');

Given('que angularjs homepage todo list', function () {
  browser.ignoreSynchronization = true;
  // browser.get('https://angularjs.org');
  browser.get('/')
  element(by.model('todoList.todoText')).sendKeys('write first protractor test');
  element(by.css('[value="add"]')).click();

  var todoList = element.all(by.repeater('todo in todoList.todos'));
  todoList.count().then(lista => {
    return assert.equal(lista, 3);
  })

  todoList.get(2)
    .getText()
    .then(resultado => {
      return assert.equal(resultado, 'write first protractor test');
    })

  // You wrote your first test, cross it off the list
  todoList.get(2).element(by.css('input')).click();
  var completedAmount = element.all(by.css('.done-true'));

  return completedAmount.count().then(resultado => {
    return assert.equal(resultado, 2);
  })
});