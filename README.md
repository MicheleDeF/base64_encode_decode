# base64_encode_decode


### base64_encode and base64_decode with node js

Install package with npm 


```sh
npm i @micheledef/base64_encode_decode

```

Usage

CommonJS syntax

```sh
const {base64_encode, base64_decode} = require('@micheledef/base64_encode_decode');

let data = "Hello World";
let encode = base64_encode(data);
console.log(encode);
//output SGVsbG8gV29ybGQ=

let decode = base64_decode(encode);
console.log(decode);
//output Hello World
```

Module syntax

```sh
import { base64_encode, base64_decode } from '@micheledef/base64_encode_decode';

let data = 'Hello World';
let encode = base64_encode(data);
console.log(encode);
//output SGVsbG8gV29ybGQ=

let decode = base64_decode(encode);
console.log(decode);
//output Hello World
```





