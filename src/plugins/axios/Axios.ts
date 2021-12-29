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
    this.requestIntereptor();
    this.responseInterceptor();
  }

  private requestIntereptor() {
    this.instance.interceptors.request.use(
      (config) => {
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }

  private responseInterceptor() {
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
