const PROTO_PATH = __dirname + '../../greeter.proto';
const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const {credentials} = require("@grpc/grpc-js");
const packageDefinition = protoLoader.loadSync(
    PROTO_PATH,
    {keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true
    });
let greeter_proto = grpc.loadPackageDefinition(packageDefinition).alis.ex.services.msoffice.v1;

function main() {
    // Connect to server and create a client.
    const ssl_creds = grpc.credentials.createSsl();
    let target = 'services-msoffice-v1-awexxij3aa-ew.a.run.app:443';
    let client = new greeter_proto.Greeter(target, ssl_creds);

    // Make a call to the SayHello method.
    client.SayHello({name: "Jan"}, function(err, response) {
        console.log('SayHelloResponse: ', response);
    });

    // Make another call to the SayHello method
    client.SayHello({name: "James"}, function(err, response) {
        console.log('SayHelloResponse: ', response);
    });
}

main();