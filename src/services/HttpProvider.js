import axios from "axios";
import { getToken } from "utils/utility";
// import { getToken, logout } from "../utils/auth.util";

const STAGING_API_URL = " http://localhost:8000/api/v1/";
export const BASEURL = STAGING_API_URL;

// const BASE_URL = "https://dmfr-dev-machine3.herokuapp.com/api/v1/";
export async function getApiRequestHeader() {
  const token = await getToken();
  const authToken = `Bearer ${token}`;
  const key = authToken?.key || "";
  const type = authToken?.type || "";
  return {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    Authorization: authToken,
    lang: JSON.parse(localStorage.getItem("locale")),
  };
}
//
const instance = axios.create({
  baseURL: BASEURL,
  timeout: 60000,
  withCredentials: false,
  dataType: "jsonp",
});

export async function updateHeaders() {
  const header = await getApiRequestHeader();
  instance.defaults.headers = header;
}

export async function request({ method, url, data, headers }) {
  if (headers === undefined) {
    await updateHeaders();
  }
  const promise = instance[method](url, data);
  let response;
  try {
    response = await promise;
  } catch (error) {
    if (error?.response?.data?.code === 401) {
      // logout();
      window.location = "/login";
    }
    throw error.response;
  }

  return response;
}

export async function newRequest({ method, url, data, headers }) {
  if (headers === undefined) {
    await updateHeaders();
  }
  const promise = instance[method](url, data);
  let response;
  try {
    response = await promise;
  } catch (error) {
    if (error?.response?.data?.code === 401) {
      // logout();
      window.location = "/login";
    }
    throw error.response;
  }

  if (
    response.status ? response.status.toString().indexOf("2") !== 0 : response.data.status.toString().indexOf("2") !== 0
  ) {
    // eslint-disable-next-line
    throw { response };
  } else {
    return response.data;
  }
}

export async function get(url, params, featureAndAction, config) {
  const { filter, ...otherParams } = params ?? {};
  let queryParams = {};

  if (config?.detail) {
    url = `${url}/${filter}`;
    return request({
      method: "get",
      url: url,
      data: { featureAndAction },
      ...config,
    });
  }

  if (filter && !url.includes("filter")) {
    queryParams.filter = JSON.stringify(filter);
  }

  for (const key in otherParams) {
    if (!url.includes(key)) {
      queryParams[key] = otherParams[key];
    }
  }

  const queryString = new URLSearchParams(queryParams).toString();
  const fullUrl = queryString ? `${url}?${queryString}` : url;

  return request({
    method: "get",
    url: fullUrl,
    data: { featureAndAction },
    header: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZDNjMzZlODFiZjAxNjQxMmVmNjRkOCIsImlhdCI6MTcwODk3NDgwMCwiZXhwIjoxNzA5MDYxMjAwfQ.Ph1neFQBfcqZ-wtXwE0qrMEWHjyLXkLjLvocg1-skzI` },
    ...config,
  });
}

export async function del(url, params, config) {
  return request({ method: "delete", url, data: { params }, ...config });
}

export async function post(url, data, featureAndAction, config, file) {
  return request({ method: "post", url, data, ...config, file });
}

export async function put(url, data, config) {
  return newRequest({ method: "put", url, data, ...config });
}

export async function patch(url, data, config) {
  return newRequest({ method: "patch", url, data, ...config });
}

export const independentRequest = async (url, method, data) => {
  const promise = axios[method](url, data);
  let response;
  try {
    response = await promise;
  } catch (error) {
    throw error.response;
  }
  const payload = response;
  return payload;
};
