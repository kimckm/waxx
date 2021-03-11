// 新建一道题目
export async function saveOne(params) {
  return fetch('/api/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(params),
  })
    .then(res => res.json())
    .catch(console.error);
}

// 查询1份试卷的题目
export async function list(params) {
  return fetch(`/graphql?query={exam(id:${params}){id+question+correct{code+expected}audio{name+src}}}`, {
    method: 'POST',
  })
    .then(res => res.json())
    .then(json => json.data.exam)
    .catch(console.error);
}

// 分页查询
export async function findByPage(params) {
  return fetch(`/api/completions`)
    .then(res => res.json())
    .catch(console.error);
}
