import { client } from "./apiClient";

export const getAllProducts = () => {
  return client("/products");
};

export const getProductById = (id) => {
  return client(`/products/${id}`);
};

export const getCategories = () => {
  return client("/categories");
};

export const getProductsByCategory = (categoryId) => {
  return client(`/products/?categoryId=${categoryId}`);
};