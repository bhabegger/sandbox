var page = require('webpage').create();
console.log('The default user agent is ' + page.settings.userAgent);
page.open('http://www.habegger.fr/', function() {
  page.render('home.png');
  phantom.exit();
});
