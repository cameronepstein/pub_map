process.env.NODE_ENV = 'test';
var app = require('../server');
// use zombie.js as headless browser
var Browser = require('zombie');

describe('homepage', function() {
  before(function() {
    this.server = http.createServer(app).listen(8000);
    // initialize the browser using the same port as the test application
    this.browser = new Browser({ site: 'http://localhost:8000' });
  });

  // load the contact page
  before(function(done) {
    this.browser.visit('/', done);
  });

  it('should show contact a form');
  it('should refuse empty submissions');
  // ...

});
