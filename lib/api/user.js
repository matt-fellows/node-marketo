var util = require('../util')

function Activities(marketo, connection) {
  this._marketo = marketo;
  this._connection = connection;
}

Activities.prototype = {
  getUsers: function() {
    var path = util.createUserPath('users', 'allusers.json');
    console.log(path)
    return this._connection.get(path, { _method: 'GET' });
  }
}

module.exports = Activities;