import Axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;
const axiosMultipart = Axios.create();

// Add a request interceptor
axiosMultipart.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    config.headers = {
      "Content-Type": "multipart/form-data",
    };
    // if (window.sessionStorage.getItem("token")) {
    //   const token = window.sessionStorage.getItem("token");
    //   config.headers["Authorization"] = `Bearer ${token}`;
    // }
    return config;
  },
  function (error) {
    console.log("error", error);
    // Do something with request error
    return Promise.reject(error);
  }
);

Axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    config.headers = {
      "Content-Type": "application/json",
    };
    if (window.sessionStorage.getItem("token")) {
      const token = window.sessionStorage.getItem("token");
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    console.log("error", error);
    // Do something with request error
    return Promise.reject(error);
  }
);

export const post = (url, payload) => {
  if(url === '/tutor_signup'){
    return axiosMultipart.post(`${API_URL}${url}`, payload)
      .then((res) => {
        console.log("Response:", res);
        return {
          success: true,
          message: "",
          statusCode: res.status,
          data: res.data,
        };
      })
      .catch((res) => {
        console.log("Err", res.response.data);
          return res.response.data;
      });
  } else {
    return Axios.post(`${API_URL}${url}`, payload)
      .then((res) => {
        console.log("Response:", res);
        return {
          success: true,
          message: "",
          statusCode: res.status,
          data: res.data,
        };
      })
      .catch((res) => {
        console.log("Err", res.response.data);
          return res.response.data;
      });
  }
};
export const put = (url, payload) => {
  return Axios.put(`${API_URL}${url}`, payload)
    .then((res) => {
      return {
        success: true,
        message: "",
        statusCode: res.status,
        data: res.data,
      };
    })
    .catch((res) => {
      const response = res.response;
      return {
        success: false,
        message: response.data.error,
        statusCode: response.status,
        data: res.response.data,
      };
    });
};

export const get = (url) => {
  return Axios.get(`${API_URL}${url}`)
    .then((res) => {
      return {
        success: true,
        message: "",
        statusCode: res.status,
        data: res.data,
      };
    })
    .catch((res) => {
      const response = res.response;
      return {
        success: false,
        message: response.data.error,
        statusCode: response.status,
        data: res.response.data,
      };
    });
};