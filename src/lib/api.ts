import Axios, { type Method, AxiosInstance } from "axios";

const BASE_API_URL = "https://jsonplaceholder.typicode.com/";

// TODO timeout is 30 seconds but needs to discuss with backend dev.
const timeoutInMilliSeconds = 30000;

export const BaseAxiosInstance = Axios.create({
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
  },
  timeout: timeoutInMilliSeconds,
  baseURL: BASE_API_URL,
});

export const invokeApi = async (
  axiosInstance: AxiosInstance,
  path: string,
  method: Method = "GET",
  body: object = {},
  headers: object = {}
) => {
  try {
    if (method === "GET" || method === "DELETE" || method === "OPTIONS") {
      const instance = await axiosInstance({
        method,
        url: path,
        headers: {
          ...headers,
        },
      });
      return instance.data;
    }
    const instance = await axiosInstance({
      method,
      url: path,
      data: JSON.stringify(body),
      headers: {
        ...headers,
      },
    });
    return instance.data;
  } catch (error) {
    throw error;
  }
};
