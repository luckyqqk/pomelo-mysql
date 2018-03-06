var MySQL = require('mysql');
module.exports = function(app, opts) {
    var mysqlClient = new MysqlClient(app, opts);
    app.set('mysql', mysqlClient.pool, true);
    return mysqlClient;
};

var MysqlClient = function(app, mysqlInfo) {
    this.app = app;
    this.pool = MySQL.createPool(mysqlInfo);
};

MysqlClient.prototype.start = function(cb) {
    cb();
};

MysqlClient.prototype.end = function(cb) {
    !!this.pool ? this.pool.end(cb) : cb();
};
