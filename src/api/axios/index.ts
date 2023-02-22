import axios from "axios";

const axiosInstance = axios.create({
  timeout: 1.5 * 60 * 1000,
  timeoutErrorMessage: "timeout",
});

export default axiosInstance;
