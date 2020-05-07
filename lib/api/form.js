var _ = require('lodash'),
    Promise = require('bluebird'),
    util = require('../util'),
    qs = require('querystring'),
    log = util.logger();

function Forms(marketo, connection) {
  this._marketo = marketo;
  this._connection = connection;
}

Forms.prototype = {
  
  getForms: function(options) {
    var path = util.createAssetPath( 'forms.json' );
    options = _.extend({}, options, {
      _method: 'GET'
    });    
    if (typeof options.maxReturn !== 'undefined') {
      path += "?maxReturn=" + options.maxReturn;
    }
    return this._connection.get(path, { data: options });
  },
};

module.exports = Forms;
