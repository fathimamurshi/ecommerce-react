import { client } from "./apiClient";

export const getAllProducts = () => {
  return client("/products");
};

export const getProductById = (id) => {
  return client(`/products/${id}`);
};

export const getCategories = () => {
  return client("/products/categories");
};

export const getProductsByCategory = (category) => {
  return client(`/products/category/${category}`);
};