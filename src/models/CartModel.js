import api from '../api.js';


export async function getCart(user_id) {
  const result = await api.get(`/users/${user_id}/getCart`);
  if (result.status === 200) return result.data;
  else {
    console.log(result.status);
    console.log(result.data);
    return [];
  }
}