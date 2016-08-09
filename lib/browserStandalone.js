var racer = require('racer');
var BCSocket = require('browserchannel/dist/bcsocket-uncompressed').BCSocket;

racer.Model.prototype._createSocket = function(bundle) {
  var options = {};
  if (bundle.browserChannel) {
    options = racer.util.mergeInto({}, options);
    racer.util.mergeInto(options, bundle.browserChannel);
  }
  var base = options.base || '/channel';
  return new BCSocket(base, options);
};
