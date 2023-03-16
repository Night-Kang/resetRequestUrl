/**
 * 处理Get请求地址和入参中的‘’，null和undefined以及Post请求地址中的‘’、null和undefined
 * @param {请求的链接} baseUrl 
 * @param {请求入参} params 
 * @returns 去除非法的字段后的请求地址
 */
export const buildUrl = (baseUrl, params) => {
  const filteredParams = {};
  // 判断请求地址规范，且除去请求地址中可能存在的null、‘’、undefined
  let tempUrl = baseUrl
  if (tempUrl) {
    tempUrl = checkBaseUrl(tempUrl)
  } else {
    throw new Error("请求地址不能为空");
  }
  // 不带入参直接返回
  if (params==null||JSON.stringify(params) == "{}") return tempUrl
  // 过滤非法入参
  for (const [key, value] of Object.entries(params)) {
    if (value !== null && value !== undefined && value !== '' && value !== 'null' && value !== 'undefined') {
      filteredParams[key] = value;
    } else {
      console.warn('key:' + key + '的入参未非法入参')
    }
  }
  const queryString = new URLSearchParams(filteredParams).toString();
  const url = `${tempUrl}?${queryString}`
  return url
}

/**
 * 处理请求地址中的‘’、null和undefined
 * @param {请求对应的Url链接} baseUrl 
 * @returns 返回去除非法字段的请求地址
 */
export const checkBaseUrl = (baseUrl) => {
  // 不包含参数的请求直接返回
  if (!baseUrl.includes('?')) return baseUrl
  // 检测请求地址的合法性
  if (baseUrl.split('?').length>2) {
    throw new Error("请求地址包含多个'?'，请确认请求地址规范");
  }
  const searchParams = new URLSearchParams(baseUrl.split('?')[1]);
  const filteredParams = {};
  // 过滤非法入参
  for (const [key, value] of searchParams.entries()) {
    if (value !== null && value !== undefined && value !== '' && value !== 'null' && value !== 'undefined') {
      filteredParams[key] = value;
    } else {
      console.warn('key:' + key + '的入参为非法入参')
    }
  }
  const queryString = new URLSearchParams(filteredParams).toString();
  const newUrl = baseUrl.split('?')[0] + '?' + queryString
  return newUrl
}
