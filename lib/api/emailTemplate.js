var _ = require('lodash'),
    Promise = require('bluebird'),
    util = require('../util'),
    qs = require('querystring'),
    log = util.logger();

function EmailTemplate(marketo, connection) {
  this._marketo = marketo;
  this._connection = connection;
}

EmailTemplate.prototype = {
  getTemplates: function(options) {
    var path = util.createAssetPath( 'emailTemplates.json' );
    options = _.extend({}, options, {
      _method: 'GET'
    });
    if (typeof options.maxReturn !== 'undefined') {
      path += "?maxReturn=" + options.maxReturn;
    }
    return this._connection.get(path, {data: options});
  },
  getTemplateContent: function(templateId, options) {
    var path = util.createAssetPath( 'emailTemplate', templateId, 'content' );
    options = _.extend({}, options, {
      _method: 'GET'
    });
    return this._connection.get(path, {data: options});
  },
},


module.exports = EmailTemplate;
