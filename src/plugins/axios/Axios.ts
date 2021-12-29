import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

export default class Axios {
  private instance: AxiosInstance;
  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config);

    this.interceptors();
  }

  public request<T>(config: AxiosRequestConfig) {
    // this.instance.request<ResponseResult<T>>();
  }

  private interceptors() {
    this.interceptorsRequest();
    this.interceptorsResponse();
  }

  private interceptorsRequest() {
    this.instance.interceptors.request.use(
      (config) => {
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }

  private interceptorsResponse() {
    this.instance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }
}
