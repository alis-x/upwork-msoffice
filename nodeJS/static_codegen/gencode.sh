#npm install -g grpc-tools
grpc_tools_node_protoc -I ../../ --js_out=import_style=commonjs,binary:./ --grpc_out=grpc_js:./ ../../greeter.proto