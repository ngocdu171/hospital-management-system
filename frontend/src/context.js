import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import myURL from "./myURL";

const HSMContext = createContext();

const HSMProvider = (props) => {
  const [patients, setPatients] = useState();
  const [userinfo, setUserinfo] = useState(null);
  const [islogin, setIslogin] = useState();

  useEffect(() => {
    axios
      .get(myURL + `/patient`)
      .then((response) => {
        console.log(response);
        setPatients(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [islogin]);

  function loginSuccess(tam) {
    // alert("login success!");
    // console.log(user);
    // console.log(tam[0].username);
    setUserinfo(tam);
    // console.log(userinfo);
    setIslogin(true);
  }
  function logout() {
      setIslogin(false);
      setUserinfo(null);
    // console.log("hitted logout!");
  }
  
  function updateInfo(newInfo) {
    // console.log("function updateInfo from context.js");
    // const tam = newInfo;
    console.log("newInfo dc in tu context: ", newInfo);
  }
  console.log(userinfo);

  return (
    <HSMContext.Provider
      value={{
        patients,
        islogin: islogin,
        userinfo,
        setUserinfo: setUserinfo,
        loginSuccess: loginSuccess,
        logout: logout,
        updateInfo: updateInfo
      }}
    >
      {props.children}
    </HSMContext.Provider>
  );
};

export { HSMContext, HSMProvider };
