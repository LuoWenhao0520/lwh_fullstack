export default {
  method: 'post',
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/x-www-form-urlencode'
  },
  data: {},
  timeout: 10000,
  withCredentials: false, //携带凭证
  responseType: 'json'
}