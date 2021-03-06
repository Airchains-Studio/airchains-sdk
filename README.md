# Vayupankh
[![npm version](https://img.shields.io/npm/v/airchains.svg?style=flat-square)](https://www.npmjs.org/package/airchains)


## Set-up

1. Download the NPM module
```bash
$ npm install airchains@latest
```
2. Require the package in your code.
```js
const Airchains = require('airchains');
```
3. Initialize with your [Airchains](https://console.airchains.io) auth key
```js
const air = new Airchains("AuthKey",'AuthPin');
```

## Request
You now have the create_contract via following methods.

```js
air.collection(CollectionName,CollectionFields,NetworkRpcUrl,callback);
air.save(collectionName,dataObject,callback);
air.find(collectionName,dataObject,callback);
```


## Example
Performing a create collection
```js

var fields = ["FIELDS_ONE","FIELD_TWO","FIELDS_THREE"];
air.collection("TestCollection",fields,"https://polygon-rpc.com/", function (error,data){
    if(error){
        console.log(error);
    }
    else{
        console.log(data);
    }
});


```
Performing a save data to collection
```js

var data = {
        FIELDS_ONE:"DATA1",
        FIELDS_TWO:"DATA2",
        FIELDS_THREE:"DATA3"
};
air.save("TestCollection",data, function (error,data){
    if(error){
        console.log(error);
    }
    else{
        console.log(data);
    }
});


```
finding data from the collection
This Example will filter data having FIELDS_ONE data as "DATA1"
```js

var data = {
        FIELDS_ONE:"DATA1"
};
air.find("TestCollection",data,  function (error,data){
    if(error){
        console.log(error);
    }
    else{
        console.log(data);
    }
});


```
