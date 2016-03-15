'use strict';
var date = new Date().getTime();

//阿里云的AccessKeyId
module.exports.AccessKeyId = "";

//随机数 推荐timestamp+4位随机数
module.exports.SignatureNonce = date.toString()+2016;;

module.exports.SignatureVersion = "1.0";


module.exports.Version = 'v2';

module.exports.hostname = '';