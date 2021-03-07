export async function list(params) {
  return fetch(`/api/exams`)
    .then(res => res.json())
    .catch(console.error);
}
