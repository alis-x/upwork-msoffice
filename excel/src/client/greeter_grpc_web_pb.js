/**
 * @fileoverview gRPC-Web generated client stub for party.lb.services.greeter.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.party = {};
proto.party.lb = {};
proto.party.lb.services = {};
proto.party.lb.services.greeter = {};
proto.party.lb.services.greeter.v1 = require('./greeter_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.party.lb.services.greeter.v1.GreeterServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.party.lb.services.greeter.v1.GreeterServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.party.lb.services.greeter.v1.SayHelloRequest,
 *   !proto.party.lb.services.greeter.v1.SayHelloResponse>}
 */
const methodDescriptor_GreeterService_SayHello = new grpc.web.MethodDescriptor(
  '/party.lb.services.greeter.v1.GreeterService/SayHello',
  grpc.web.MethodType.UNARY,
  proto.party.lb.services.greeter.v1.SayHelloRequest,
  proto.party.lb.services.greeter.v1.SayHelloResponse,
  /**
   * @param {!proto.party.lb.services.greeter.v1.SayHelloRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.party.lb.services.greeter.v1.SayHelloResponse.deserializeBinary
);


/**
 * @param {!proto.party.lb.services.greeter.v1.SayHelloRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.party.lb.services.greeter.v1.SayHelloResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.party.lb.services.greeter.v1.SayHelloResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.party.lb.services.greeter.v1.GreeterServiceClient.prototype.sayHello =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/party.lb.services.greeter.v1.GreeterService/SayHello',
      request,
      metadata || {},
      methodDescriptor_GreeterService_SayHello,
      callback);
};


/**
 * @param {!proto.party.lb.services.greeter.v1.SayHelloRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.party.lb.services.greeter.v1.SayHelloResponse>}
 *     Promise that resolves to the response
 */
proto.party.lb.services.greeter.v1.GreeterServicePromiseClient.prototype.sayHello =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/party.lb.services.greeter.v1.GreeterService/SayHello',
      request,
      metadata || {},
      methodDescriptor_GreeterService_SayHello);
};


module.exports = proto.party.lb.services.greeter.v1;

