const assert = require('chai').assert;
const calculator = require('../path/to/calculator'); // Update the path accordingly

describe('Calculator Tests', function () {
  it('should add two numbers', function () {
    assert.equal(calculator.add(5, 2), 7);
  });

  it('should subtract two numbers', function () {
    assert.equal(calculator.sub(5, 2), 3);
  });

  it('should multiply two numbers', function () {
    assert.equal(calculator.mul(5, 2), 10);
  });

  it('should divide two numbers', function () {
    assert.equal(calculator.div(10, 2), 5);
  });

  // Failing test cases
  it('should fail to add two numbers', function () {
    assert.equal(calculator.add(5, 2), 8);
  });

  it('should fail to subtract two numbers', function () {
    assert.equal(calculator.sub(5, 2), 5);
  });

  it('should fail to multiply two numbers', function () {
    assert.equal(calculator.mul(5, 2), 12);
  });

  it('should fail to divide two numbers', function () {
    assert.equal(calculator.div(10, 2), 2);
  });
});
