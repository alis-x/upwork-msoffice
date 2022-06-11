/* eslint-disable @typescript-eslint/no-unused-vars */
/* global console setInterval, clearInterval */

const {SayHelloRequest, SayHelloResponse} = require('../client/greeter_pb.js');
const {GreeterServiceClient} = require('../client/greeter_grpc_web_pb.js');

let target = 'https://services-gateway-v1-rruykyywdq-ew.a.run.app';

var greeterService = new GreeterServiceClient(target);

/**
 * This method generates a hello message to a specified individual
 * @customfunction sayHello sayHello
 * @param name Name of the person to which to say hello
 * @returns The hello message
 */
function GreeterService_SayHello(name) {
  return new Promise(function (resolve, reject) {

    var request = new SayHelloRequest();
    request.setName(name);

    greeterService.sayHello(request, {},
      function(err, response) {
        resolve(response.getMessage());
    });
  });
}