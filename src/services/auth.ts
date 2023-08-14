import { authRoutes } from "../api";

export const validateToken = async (json: string) => {
  if (
    json === "Token is Invalid" ||
    json === "Token is Expired" ||
    json === "Authorization Token not found"
  ) {
    window.location.href = "/logout";
  }
};

export const logout = () => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("user");

  window.location.href = "/";
};

export const login = async (access_token: string) => {
  localStorage.setItem("access_token", access_token);

  const response = await authRoutes.me();
  localStorage.setItem("user", JSON.stringify(response));
};
