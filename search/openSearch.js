'use strict';
var http = require('http');
var moment = require('moment');
var urlencode = require('urlencode');
var crypto = require('crypto');
var config = require('./config');

var accessKeyId = config.AccessKeyId;

var SignatureVersion = config.SignatureVersion;
var SignatureNonce =config.SignatureNonce;
var version = config.Version;
var hostname = config.hostname;

module.exports.getDateFromSearchEagin = function(indexName,query,callback){
    var mom = moment.utc().toISOString().substr(0,19);
    var Signature = '';
    var dataquery = urlencode(mom)+'Z';
    var str='AccessKeyId='+accessKeyId+'&SignatureMethod=HMAC-SHA1&SignatureNonce='+SignatureNonce+'&SignatureVersion='+SignatureVersion+'&Timestamp='+dataquery+'&Version='+version+'&index_name='+indexName+'&query='+urlencode(query);
    var stringtosing = 'GET'+'&'+urlencode('/')+'&'+urlencode(str);
    var scr = 'ZnzbOSGnbaaZH4SZFKEj9V1YeNHwYQ'+'&'
    Signature = crypto.createHmac('sha1',scr).update(stringtosing).digest().toString('base64');
    var url = '/search?'+str+'&Signature='+urlencode(Signature);
    var options = {
        hostname: hostname,
        port: 80,
        path:url,
        method: 'get'
    };
    http.get(options,function(res){
        var chunks = [];
        res.on('data', function (chunk) {
            chunks += chunk;
        });
        res.on('end',function(){
            var buf = new Buffer(chunks);
            var date = JSON.parse(buf.toString());
            if(date.status == 'OK'){
                callback(null,date);
            }else {
                callback(date.errors);
            }
        })

    })
}


