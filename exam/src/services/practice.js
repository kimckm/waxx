import qs from 'querystring';

// 随机抽题
export async function random(params) {
  return fetch(`/api/practice/random?${qs.stringify(params)}`)
    .then(res => res.json())
    .catch(console.error);
}
