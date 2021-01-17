export async function list(params) {
  return fetch('/api/completions')
    .then(res => res.json())
    .catch(console.error);
}
