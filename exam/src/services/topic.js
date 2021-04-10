import qs from 'querystring';

export async function saveOne(params) {
  return fetch('/api/topics', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(params),
  })
    .then(res => res.json())
    .catch(console.error);
}

// 分页查询
export async function findByPage(params) {
  return fetch(`/api/topics?${qs.stringify(params)}`)
    .then(res => res.json())
    .catch(console.error);
}

export async function findCatalog(params) {
  return fetch(`/api/catalogs?${qs.stringify(params)}`)
    .then(res => res.json())
    .catch(console.error);
}
