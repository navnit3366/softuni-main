function validateRequest(request) {

    let validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    let validUri = /^(?:[a-zA-Z0-9.]+|\*)$/;
    let validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    let validMessage = /^[^<>\\&'"`]*$/;

    if(!request.hasOwnProperty('method')
    || !validMethods.includes(request.method)) 
        throw new Error(`Invalid request header: Invalid Method`);

    if(!request.hasOwnProperty('uri')
    || !validUri.test(request.uri)) 
        throw new Error(`Invalid request header: Invalid URI`);

    if(!request.hasOwnProperty('version')
    || !validVersions.includes(request.version)) 
        throw new Error(`Invalid request header: Invalid Version`);

    if(!request.hasOwnProperty('message')
    || !validMessage.test(request.message)) 
        throw new Error(`Invalid request header: Invalid Message`);

    console.log(request);
}

validateRequest({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
});

validateRequest({
    method: 'OPTIONS',
    uri: 'git.master',
    version: 'HTTP/1.1',
    message: '-recursive'
});