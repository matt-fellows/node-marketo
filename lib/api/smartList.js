var _ = require('lodash'),
    util = require('../util');

var SMARTLISTS = util.createAssetPath('smartLists.json');

function SmartList(marketo, connection) {
  this._marketo = marketo;
  this._connection = connection;
}

SmartList.prototype = {
  getSmartLists: function (options) {
    var path = util.createAssetPath( 'smartLists.json' );
    options = _.extend({}, options, {
      _method: 'GET'
    });    
    if (typeof options.maxReturn !== 'undefined') {
      path += "?maxReturn=" + options.maxReturn;
    }
    return this._connection.get(path, { data: options });
  },
  find: function(options) {
    var arrayFields = [];
    options = _.extend({}, options, {
      _method: 'GET',
    });
    options = util.arrayToCSV(options, arrayFields);
    return this._connection.post(SMARTLISTS, {data: options});
  },
  byId: function(smartListId, options) {
    // var SMARTLISTS_ID = util.createAssetPath('smartList', `${smartListId}.json`);
    // var arrayFields = [];
    // options = _.extend({}, options, {
    //   _method: 'GET',
    // });
    // path += "includeRules=true"
    // options = util.arrayToCSV(options, arrayFields);
    // return this._connection.post(SMARTLISTS_ID, {data: options});
    var path = util.createAssetPath( 'smartList', smartListId + '.json' );
    options = _.extend({}, options, {
      _method: 'GET'
    });    
    //if (typeof options.maxReturn !== 'undefined') {
     path += "?includeRules=true"
  //}
  console.log(path)
    return this._connection.get(path, { data: options });
  }
};

module.exports = SmartList;