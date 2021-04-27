const url = require('url');

const myUrl = new URL('http://mywebsite.com:8000/hello.html?id=100&status=active');

//Serialzed URL
console.log(myUrl.href);
console.log(myUrl.toString());
console.log('\n')

//host || root name
console.log(myUrl.host);

//host name
console.log(myUrl.hostname);

//path name
console.log(myUrl.pathname);

//serialized Query
console.log(myUrl.search);

//Params Object
console.log(myUrl.searchParams);

//add params
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);
console.log('\n');
//Loop through all params
myUrl.searchParams.forEach((value, name) => {
    console.log(`${name}: ${value}`);
})

const params = myUrl.searchParams;

params.forEach((value, name) => {
    if (name == 'id') {
        params.set('id', '200');
    }

});
console.log(myUrl.href);

myUrl.searchParams.forEach((value, name) => {
    console.log(`${name}: ${value}`);
})

console.log(`Believe In Allah`);
console.log(`Trust Allah`);
console.log(`Have faith in Allah`)