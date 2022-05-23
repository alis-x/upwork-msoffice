/* eslint-disable @typescript-eslint/no-unused-vars */
/* global console setInterval, clearInterval */

const {SayHelloRequest, SayHelloResponse} = require('../client/greeter_pb.js');
const {GreeterServiceClient} = require('../client/greeter_grpc_web_pb.js');

/**
 * Calls the GreeterService.sayHello gRPC method.
 * @customfunction sayHello sayHello
 * @param {string} name String to send.
 * @returns Returned String.
 */
function sayHello(name) {
  let target = 'https://services-gateway-v1-rruykyywdq-ew.a.run.app';
  var greeterService = new GreeterServiceClient(target);

  console.log(name);

  return new Promise(function (resolve, reject) {

    var request = new SayHelloRequest();
    request.setName(name);

    greeterService.sayHello(request, {},
      function(err, response) {
        console.log(err);
        resolve(response.getMessage());
    });
  });
}
