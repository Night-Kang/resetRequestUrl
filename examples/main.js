import { buildUrl, checkBaseUrl }  from './../dist/esm/index.js'
// const utils = require('./../dist/cjs/index.js')

//1. 请求链接地址
var url = 'https://example.com/api?name=test&book=&author=null&price=undefined';
// var url = ''
var newUrl = buildUrl(url, {})
console.log(newUrl)
//2. 请求入参
var userInfo = buildUrl(url, {hello:'box',world:'here',age:'',address: null, sex: undefined})
console.log(userInfo)