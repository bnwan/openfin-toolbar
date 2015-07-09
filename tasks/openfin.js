var openfin = require ('openfin-launcher');
var webPackConfig = require('../webpack.config');

var url = 'http://' + webPackConfig.devServer.host + ':' + webPackConfig.devServer.port + '/app.json';

console.log(url);

openfin.launchOpenFin({
  configPath: url
})
.then(function() {
  console.log('success!');
})
.fail(function(error) {
  console.log('error!', error);
});