##请求地址过滤

###说明
用来过滤请求地址中或者Get入参中的非法字段和入参（null、‘’和undefined）

###安装
1. npm i
2. npm build

###方法
1. buildUrl 比方过滤GET请求中的链接地址以及入参中非法字段
2. checkBaseUrl 过滤请求地址中的非法字段（可以处理POST的请求地址中的）


###使用
1. CJS(CommonJS)
	
	```
	<!-- const utils = require('./../dist/cjs/index.js') -->
	const utils = require('reset-request-url')
	//1. 请求链接地址
	const url ='https://example.com/api?name=test&book=&author=null&price=undefined';
	// 输入正常请求地址
	let newUrl = utils.buildUrl(url, {});
	```
2. ESM(ECMAScript Modules)

	```
	import { buildUrl, checkBaseUrl }  from 'reset-request-url'
	const url= 'https://example.com/api?name=test&book=&author=null&price=undefined';
	let userInfo =buildUrl(url, {hello:'box',world:'here',age:'',address: null, sex: undefined})
	console.log(userInfo)
	```

