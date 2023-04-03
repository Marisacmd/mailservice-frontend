import axios, { AxiosResponse } from "axios";
import { BACKEND_PORT, BACKEND_URL } from "../config/constants";

export const apiCall = (
  method: string,
  endpoint: string,
  requestBody: Object,
  responseCallback?: null | ((arg0: AxiosResponse) => void),
  executionCallback?: () => void | null
) => {
  axios({
    method: method,
    url: `${BACKEND_URL}:${BACKEND_PORT}/${endpoint}`,
    data: requestBody,
  })
    .then(function (response) {
      if (responseCallback) {
        responseCallback(response);
      }
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(() => {
      if (executionCallback) {
        executionCallback();
      }
    });
};
