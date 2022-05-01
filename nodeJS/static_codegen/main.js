const grpc = require('@grpc/grpc-js');
const messages = require('./greeter_pb');
const services = require('./greeter_grpc_pb');

function main() {
    // Connect to server and create a client.
    const ssl_creds = grpc.credentials.createSsl();
    let target = 'services-msoffice-v1-awexxij3aa-ew.a.run.app:443';
    let client = new services.GreeterClient(target, ssl_creds)

    // Make a call to the SayHello method.
    let request = new messages.SayHelloRequest()
    request.setName("Jan")
    client.sayHello(request, function(err, response) {
        console.log('Message:', response.getMessage());
    });

    // Make another call to the SayHello method.
    request.setName("James")
    client.sayHello(request, function(err, response) {
        console.log('Message:', response.getMessage());
    });
}

main();