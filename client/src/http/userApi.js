import { $authHost, $host } from "./index";
import jwt_decode from "jwt-decode";

export const registration = async (email, password) => {
  const response = await $host.post("api/user/registration", {
    email,
    password,
    role: "ADMIN", //todo тут наверно както при регистрации должно менятся
  });
  const { data } = response;
  localStorage.setItem("token", data.token);
  return jwt_decode(data.token);
};

export const login = async (email, password) => {
  const response = await $host.post("api/user/login", {
    email,
    password,
  });
  const { data } = response;
  localStorage.setItem("token", data.token);
  return jwt_decode(data.token);
};

export const check = async () => {
  const { data } = await $authHost.get("api/user/auth");
  localStorage.setItem("token", data.token);
  return jwt_decode(data.token);
};
