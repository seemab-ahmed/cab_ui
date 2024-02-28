import { get, post, del } from "./HttpProvider";
import featureConstants from "./features-constants";

const SERVICE_URLS = {
  // service URL's (API End-Points)
  login: "/user/login",
  signUp: "/user/signup",
  logout:"/user/logout",
  readUser: "/user"
};

const login = (data) => post(SERVICE_URLS.login, data, { feature: featureConstants.login });
const signUp = (data) => post(SERVICE_URLS.signUp, data, {feature: featureConstants.login});
const logout = (data) => del(SERVICE_URLS.logout, data, {feature: featureConstants.login});
const readUser = (data) => get(SERVICE_URLS.readUser, {}, { feature: featureConstants.login });
const apiServices = {
  login,
  signUp,
  logout,
  readUser,
};
export default apiServices;
