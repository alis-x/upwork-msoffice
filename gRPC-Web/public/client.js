// const grpc = require('@grpc/grpc-js')
const {SayHelloRequest, SayHelloResponse} = require('../greeter_pb.js');
const {GreeterServiceClient} = require('../greeter_grpc_web_pb.js');


// const ssl_creds = grpc.credentials.createSsl();
let target = 'https://services-gateway-v1-rruykyywdq-ew.a.run.app';
// var greeterService = new GreeterServiceClient(target, ssl_creds);
var greeterService = new GreeterServiceClient(target);

var request = new SayHelloRequest();
request.setName('Jason');

greeterService.sayHello(request, {}, function(err, response) {
    console.log('gRPC-web response to follow...')
    console.log(response.getMessage())
});
