import axios from "axios";

// const govRequest = axios.create({
//   baseURL: "https://api.nlsc.gov.tw/other/",
// });
const userRequest = axios.create({
  baseURL: import.meta.env.VITE_API_PATH,
});

const assignData = (data) => {
  if (data) {
    Object.keys(data).forEach((key) => {
      if (typeof data[key] === "object") {
        data[key] = JSON.stringify(data[key]);
      }
    });
  }
  return data;
};

userRequest.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("user")
      ? `Bearer ${JSON.parse(localStorage.getItem("user")).token}`
      : "";
    console.log(token);
    config.headers.Authorization = token;
    // config.headers.Authorization = `Bearer${sessionStorage.getItem(SST.TOKEN)}`;
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

userRequest.interceptors.response.use(
  function (response) {
    // Do something with response data
    return response;
  },
  function (error) {
    
    return Promise.reject(error.response);
  }
);

const trycatchApi = async (apiRequestMethod, apiPath, data) => {
  console.log('trycatchApi',apiRequestMethod, apiPath, data);
  try {
    if (apiRequestMethod === "post") {
      return await userRequest.post(apiPath, data);
    } else {
      return await userRequest.get(apiPath, { params: data });
    }
  } catch (error) {
    console.log('error',error)
    return error;
  }
};

//縣市
// export const getListCounty = () =>
//   govRequest.get("/ListCounty", { headers: { Accept: "application/json" } });
//創建帳號
export const getNav = (data) =>
  trycatchApi("get", "/data.json", assignData(data));

