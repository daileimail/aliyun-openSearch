# aliyun-openSearch
1.  阿里云的openSearch，node SDK
2.  手工打造。

## 使用方式

### 配置环境
1. 在config文件当中填写相应内容，包括accessKeyId和hostname

2. 调用opensearch当中的getDateFromSearchEagin方法function(indexName,query,callback)
    indexName 为所查表名，query为查询内容 callback为回掉，方式为function(err,data);
    
## 例子：

    var search = require('openSearch');
    search.getDateFromSearchEagin("user","jack",function(err,data){
        if(err){
            console.log(err);
        }else{
            console.log(data);
        }
    });