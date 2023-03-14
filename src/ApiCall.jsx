
import axios from 'axios';
import React, { useState, useEffect } from 'react';
// import Toast from '../UiModules/Core/Toast/Toast';


// const getError = (error) => {
//   if (error.response) {
//     let status = error?.response?.data?.code
//     let message = error?.response?.data?.message
//     if (status === 401) {
//       Toast(message, "error")
//       if (localStorage.getItem("loggedIn")) {
//         localStorage.removeItem("loggedIn")
//         localStorage.removeItem("token")
//         window.location = '/login';
//       }
//     }
//     else if (status === 403)
//       Toast("This Role is restricted to access to this request.", "error")
//     else if (status === 500)
//       Toast("Internal Server Error", "error")
//     else if (status === 422)
//       Toast("Cannot Process Please Try Again", "error")
//     else if (status === 405)
//       Toast("Not Found", "error")
//     else if (status === 406)
//       Toast("Already Exist", "error")
//     else if (status === 404)
//       Toast("API Not Found", "error")
//     else if (status === 444)
//       Toast("Invalid Data", "error")
//     else if (status === 430)
//       Toast(error.response.data, "error")
//     else
//       Toast(message, "error")
//   } else
//     Toast("No Internet Connection", "error")

// }
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NDAwNTBiZmJjMjc0ODRjOGE2YjRmN2QiLCJpYXQiOjE2Nzg3MzQ5MTUsImV4cCI6bnVsbCwidHlwZSI6ImFjY2VzcyJ9.f5XFKS1oLLtpO0KGMqFTZKNBSBsXIUfKqetRdM7V7Mg";
const baseUrl = "http://ec2-52-56-60-201.eu-west-2.compute.amazonaws.com:3001/v1" //*! Production */FOR PRODUCTION
// const baseUrl = "http://localhost:3001/v1" //*! Development */FOR DEVELOPMENT

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "X-Requested-With",
  "Content-type": "application/json; charset=UTF-8",
  Authorization: `Bearer ${token}`
};
const options = { headers, withCredentials: true };


const ApiCallPost = (path, data, redirect = true) => {
  return axios.post(baseUrl + path, data, options)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      // return getError(error);
      console.log(error)
    });

}


const ApiCallGet = (path,payload, redirect = true) => {

  
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = () => {
    setLoading(true);
    return axios.get(baseUrl + path, options).then(res => setResponse(res.data))
      .catch((error) => {
        setError({ info: error?.response?.data, code: error?.response?.data?.code, message: error?.response?.data?.message });
        // getError(error)
      }).finally(() => setLoading(false));
  }


  useEffect(() => {
    fetchData();
  }, [path, payload?.getUpdatedData]);
  console.log('%cResponse: %o\n%cError:  %o\n%cpayload: ',
    'background: red; color: white; font-size: 20px;', response,
    'background: red; color: white; font-size: 20px;', error);
  return { response, error, loading };
};

export { ApiCallGet, ApiCallPost };
