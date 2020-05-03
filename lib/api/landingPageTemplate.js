var _ = require('lodash'),
    Promise = require('bluebird'),
    util = require('../util'),
    qs = require('querystring'),
    log = util.logger();

function LandingPageTemplate(marketo, connection) {
  this._marketo = marketo;
  this._connection = connection;
}

LandingPageTemplate.prototype = {
  getTemplates: function(options) {
    var path = util.createAssetPath( 'landingPageTemplates.json' );
    options = _.extend({}, options, {
      _method: 'GET'
    });
    if (typeof options.maxReturn !== 'undefined') {
      path += "?maxReturn=" + options.maxReturn;
    }
    return this._connection.get(path, {data: options});
  },
};

module.exports = LandingPageTemplate;
