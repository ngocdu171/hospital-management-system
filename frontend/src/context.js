import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import myURL from "./myURL";

const HSMContext = createContext();

const HSMProvider = (props) => {
  const [patients, setPatients] = useState();
  const [userinfo, setUserinfo] = useState(null);
  const [islogin, setIslogin] = useState(false);

  useEffect(() => {
    getAllPatient();
    // axios
    //   .get(myURL + `/patient`)
    //   .then((response) => {
    //     console.log(response);
    //     setPatients(response.data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }, [islogin]);

  function getAllPatient() {
    axios
      .get(myURL + `/patient`)
      .then((response) => {
        // console.log(response);
        setPatients(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

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
  
  function updateInfo(_id,newInfo) {
    // console.log("function updateInfo from context.js");
    // const tam = newInfo;
    axios.put(myURL+`/patient/`+_id, newInfo)
    .then(response =>{
      getAllPatient();
    });
    // console.log("newInfo dc in tu context: ", newInfo);
    // console.log("idUser: ", userinfo[0]._id);
  }
  // console.log(userinfo);

  function bookAppointment(date,time,department,doctor) {
    const filterUser = patients.find(patient => patient.username === userinfo[0].username)
    // console.log("this is newBook in context: ", newBook , "filterUser: " ,filterUser);
    // console.log(filterUser.fullname);
    var newBook = [filterUser.fullname,filterUser.address,filterUser.phone,filterUser.city,
      filterUser.blood,filterUser.gender,date,time,department,doctor];
    console.log("fullname: ",typeof(filterUser.fullname), ", address: ",typeof(filterUser.address),
    ", phone: ",typeof(filterUser.phone), ", city: ",typeof(filterUser.city),
    ", blood: ",typeof(filterUser.blood),", gender: ",typeof(filterUser.gender),
    ", date: ",typeof(date), ", time: ",typeof(time),
    ", department: ",typeof(department),", doctor: ",typeof(doctor));
    // console.log(newBook);
    // axios.post(myURL+`/patient/book`,newBook)
    // .then(response => {
    //   console.log(response.data.message);
    // });
  }
  console.log(patients);

  return (
    <HSMContext.Provider
      value={{
        patients,
        islogin: islogin,
        userinfo,
        setUserinfo: setUserinfo,
        loginSuccess: loginSuccess,
        logout: logout,
        updateInfo: updateInfo,
        bookAppointment: bookAppointment
      }}
    >
      {props.children}
    </HSMContext.Provider>
  );
};

export { HSMContext, HSMProvider };
