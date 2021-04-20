import qs from 'querystring';

// 新建一道题目
export async function saveOne(params) {
  return fetch('/api/choices', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      question: params.question,
      choiceOptions: params.options,
    }),
  })
    .then(res => res.json())
    .catch(console.error);
}

// 分页查询
export async function findByPage(params) {
  return fetch(`/api/choices?${qs.stringify(params)}`)
    .then(res => res.json())
    .catch(console.error);
}
