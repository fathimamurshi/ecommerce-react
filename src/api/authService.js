import { client } from "./apiClient";

export const loginUser = async (email, password) => {

  const data = await client("/auth/login", {
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password
    })
  });

  return data;
};