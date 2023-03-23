function base64_encode(data){
    let buff = Buffer.from(data);
    let base64_encode_data = buff.toString('base64');
    return base64_encode_data;

}


function base64_decode(data){
let buff = Buffer.from(data, 'base64');
let base64_dencode_data = buff.toString('ascii');
return base64_dencode_data;

}

module.exports = {
    base64_encode,
    base64_decode,
};
