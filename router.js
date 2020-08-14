var net = require('net');
var util = require('util');
var events = require('events');

module.exports = Router;

/**
 *  Router class
 */

function Router(opts) {
  this.opts = opts || {};

  this.connection = null;

  this.connecting = false;
  this.connected = false;

  this.statusObj = {};

  // if we were given the host and port connect right away
  if (this.opts.host && this.opts.port) {
    this.connect(this.opts.host, this.opts.port);
  };
};

/**
 *  Inherit the event emitter
 */

util.inherits(Router, events.EventEmitter);

/**
 *  Connect to the router
 *
 *  @param {String} host
 *  @param {String} port
 *  @returns {Object}
 */

Router.prototype.connect = function(host, port) {
  if (this.connecting) return this.connection;

  if (host) this.opts.host = host;
  if (port) this.opts.host = host;

  if (!this.opts.host) throw new Error('Must supply host name in constructor or this method');
  if (!this.opts.port) throw new Error('Must supply port in constructor or this method');

  this.connection = net.createConnection(this.opts.port, this.opts.host);
  return this.connection;
};

Router.prototype.route = function(output, input) {
  var str = ['VIDEO OUTPUT ROUTING:', output+' '+input].join('\n');
  str += '\n\n';
  this.connection.write(str);

  return true;
};
