// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var greeter_pb = require('./greeter_pb.js');

function serialize_party_lb_services_greeter_v1_SayHelloRequest(arg) {
    if (!(arg instanceof greeter_pb.SayHelloRequest)) {
        throw new Error('Expected argument of type party.lb.services.greeter.v1.SayHelloRequest');
    }
    return Buffer.from(arg.serializeBinary());
}

function deserialize_party_lb_services_greeter_v1_SayHelloRequest(buffer_arg) {
    return greeter_pb.SayHelloRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_party_lb_services_greeter_v1_SayHelloResponse(arg) {
    if (!(arg instanceof greeter_pb.SayHelloResponse)) {
        throw new Error('Expected argument of type party.lb.services.greeter.v1.SayHelloResponse');
    }
    return Buffer.from(arg.serializeBinary());
}

function deserialize_party_lb_services_greeter_v1_SayHelloResponse(buffer_arg) {
    return greeter_pb.SayHelloResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// A sample service to use for creating ms_office
var GreeterServiceService = exports.GreeterServiceService = {
    // This method generates a hello message to a specified individual
    sayHello: {
        path: '/party.lb.services.greeter.v1.GreeterService/SayHello',
        requestStream: false,
        responseStream: false,
        requestType: greeter_pb.SayHelloRequest,
        responseType: greeter_pb.SayHelloResponse,
        requestSerialize: serialize_party_lb_services_greeter_v1_SayHelloRequest,
        requestDeserialize: deserialize_party_lb_services_greeter_v1_SayHelloRequest,
        responseSerialize: serialize_party_lb_services_greeter_v1_SayHelloResponse,
        responseDeserialize: deserialize_party_lb_services_greeter_v1_SayHelloResponse,
    },
};

exports.GreeterServiceClient = grpc.makeGenericClientConstructor(GreeterServiceService);