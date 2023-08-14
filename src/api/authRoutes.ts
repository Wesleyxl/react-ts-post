import { apiFetchGet, apiPublicFetchPost } from "./method";

export const authRoutes = {
  login: async (email: string, password: string) => {
    const response = await apiPublicFetchPost("/auth/login", {
      email,
      password,
    });

    return response;
  },

  me: async () => {
    const response = await apiFetchGet("/auth/me");

    return response;
  },
};
