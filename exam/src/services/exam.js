export async function list(params) {
  return fetch('/graphql?query={exam{id+question+correct{code+expected}audio{name+src}}}', {
    method: 'POST',
  })
    .then(res => res.json())
    .then(json => json.data.exam)
    .catch(console.error);
}
