import api from '../api.js';

export async function getAll(url = '/products') {
  const result = await api.get(url);

  if (result.status === 200) return result.data;
  else {
    console.log(result.status);
    console.log(result.data);
    return [];
  }
}

export async function getOne(productId) {
  const result = await api.get(`/products/${productId}`);

  if (result.status === 200) return result.data;
  else {
    console.log(result.status);
    console.log(result.data);
    return {};
  }
}

export async function create(product) {
  const result = await api.post('/products', product);

  if (result.status === 201) return result.data;
  else {
    console.log(result.status);
    console.log(result.data);
    return {};
  }
}

export async function addToCart(productId, user_id, quantity) {
  const result = await api.post(`/products/${productId}/addToCart`, {
    user_id,
    quantity,
  });

  if (result.status === 200) return result.data;
  else if (result.status === 409) {
    const existingCartRow = result.data;
    const newQuantity = existingCartRow.quantity + quantity;
    await api.put(`/cartRows/${existingCartRow.id}`, { quantity: newQuantity });
  } else {
    console.log(result.status);
    console.log(result.data);
    return {};
  }
}


async function getCart(userId) {
  const result = await api.get(`/users/${userId}/getCart`);
  if (result.status === 200) return result.data;
  else {
    console.log(result.status);
    console.log(result.data);
    return [];
  }
}

export async function update(product) {
  const result = await api.put(`/products/${product.id}`, product);

  if (result.status === 200) return result.data;
  else {
    console.log(result.status);
    console.log(result.data);
    return {};
  }
}

export async function remove(productId) {
  const result = await api.delete(`/products`, {
    data: {
      id: productId,
    },
  });

  if (result.status === 200) return result.data;
  else {
    console.log(result.status);
    console.log(result.data);
    return {};
  }
}

export async function addRating(productId, rating) {
  const result = await api.post(`/products/${productId}/addRating`, {
    rating,
  });

  if (result.status === 200) return result.data;
  else {
    console.log(result.status);
    console.log(result.data);
    return {};
  }
}