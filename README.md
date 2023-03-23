# base64_encode_decode


### base64_encode and base64_decode with node js

Install package with npm 


```sh
npm install base64_encode_decode

```

Usage

```sh
const {base64_encode, base64_decode} = require('base64_encode_decode');

let data = "Hello World";
let encode = base64_encode(data);
console.log(encode);
//output SGVsbG8gV29ybGQ=

let decode = base64_decode(encode);
console.log(decode);
//output Hello World
```



