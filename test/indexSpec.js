'use strict'

var chai = require('chai');
var expect = chai.expect;

describe('London button', function() {
  it('renders a London button', function()  {
    expect(londonButton.innerHTML).to.equal('London');
  });
});
