var expect = require('chai').expect;
require('mocha-sinon');
var fs = require('fs');
var logMsg = require('../index');

describe('objLogMsg.log() ', function() {

  let objLogMsg = logMsg({
    DEBUG_MODE: true,
    INFO_MODE: true,
    WARN_MODE: true,
    ERROR_MODE: true
  });

  beforeEach(function() {
    this.sinon.stub(console, 'log');
  });

  it('Checking DEBUG_MODE state is true, SHOULD call console.log once', function() {
    objLogMsg.log("DEBUG", "test debug message")
    expect( console.log.calledOnce ).to.be.true;
  });

  it('Checking INFO_MODE state is true, SHOULD call console.log once', function() {
    objLogMsg.log("INFO", "test info message")
    expect( console.log.calledOnce ).to.be.true;
  });

  it('Checking WARN_MODE state is true, SHOULD call console.log once', function() {
    objLogMsg.log("WARN", "test warn message")
    expect( console.log.calledOnce ).to.be.true;
  });

  it('Checking ERROR_MODE state is true, SHOULD call console.log once', function() {
    objLogMsg.log("ERROR", "test error message")
    expect( console.log.calledOnce ).to.be.true;
  });

  

});

describe('objLogMsg.log() ', function() {

  let objLogMsg = logMsg({});

  beforeEach(function() {
    this.sinon.stub(console, 'log');
  });

  it('Checking DEBUG_MODE state is false, SHOULD NOT call console.log', function() {
    objLogMsg.log("DEBUG", "test debug message")
    expect( console.log.calledOnce ).to.be.false;
  });

  it('Checking INFO_MODE state is false, SHOULD NOT call console.log', function() {
    objLogMsg.log("INFO", "test info message")
    expect( console.log.calledOnce ).to.be.false;
  });

  it('Checking WARN_MODE state is false, SHOULD NOT call console.log', function() {
    objLogMsg.log("WARN", "test warn message")
    expect( console.log.calledOnce ).to.be.false;
  });

  it('Checking ERROR_MODE state is false, SHOULD NOT call console.log', function() {
    objLogMsg.log("ERROR", "test error message")
    expect( console.log.calledOnce ).to.be.false;
  });

});