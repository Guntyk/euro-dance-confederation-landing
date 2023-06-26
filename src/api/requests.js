import axios from "axios";

export const backendApi = axios.create({
  baseURL: "https://sgostu-backend.download/api",
});

backendApi.interceptors.response.use(
  (response) => [null, response.data],
  (error) => [error, null]
);

export const putUser = (person) =>
  backendApi.post("/ecds-people", person, {
    headers: { "Content-Type": "application/json" },
  });
