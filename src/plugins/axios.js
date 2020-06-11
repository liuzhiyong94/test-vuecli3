"use strict";

import Vue from 'vue';
import axios from "axios";
import { Loading } from 'element-ui';

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

let config = {
  // baseURL: process.env.baseURL || process.env.apiUrl || "",
  baseURL: "/api",
  timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
  headers: {
    Authorization: "Bearer " + sessionStorage.getItem("secretKey")
  }
};

let loadingInstance = null;

const _axios = axios.create(config);

_axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    loadingInstance = Loading.service();
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
_axios.interceptors.response.use(
  function (response) {
    loadingInstance.close();
    // Do something with response data
    return response.status == 200 ? response.data : response.statusText;
  },
  function (error) {
    loadingInstance.close();
    // Do something with response error
    return Promise.reject(error);
  }
);

Plugin.install = function (Vue) {
  Vue.axios = _axios;
  window.axios = _axios;
  Object.defineProperties(Vue.prototype, {
    axios: {
      get() {
        return _axios;
      }
    },
    $axios: {
      get() {
        return _axios;
      }
    },
  });
};

Vue.use(Plugin)

export default Plugin;
