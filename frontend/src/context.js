import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import myURL from "./myURL";

const HSMContext = createContext();

const HSMProvider = (props) => {
  const [patients, setPatients] = useState();
  const [appointments, setAppointments] = useState();
  const [userinfo, setUserinfo] = useState(null);
  const [islogin, setIslogin] = useState(false);

  useEffect(() => {
    getAllPatient();
    getAppointment();
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
    // var newBook = [filterUser.fullname,filterUser.address,filterUser.phone,
    //   filterUser.city,filterUser.blood,filterUser.gender,date,time,department,doctor];
    var username = userinfo[0].username;
    var fullname = filterUser.fullname;
      var address = filterUser.address;
        var phone = filterUser.phone;
          var city = filterUser.city;
            var blood = filterUser.blood;
              var gender = filterUser.gender;
    // console.log("fullname: ",typeof(filterUser.fullname), ", address: ",typeof(filterUser.address),
    // ", phone: ",typeof(filterUser.phone), ", city: ",typeof(filterUser.city),
    // ", blood: ",typeof(filterUser.blood),", gender: ",typeof(filterUser.gender),
    // ", date: ",typeof(date), ", time: ",typeof(time),
    // ", department: ",typeof(department),", doctor: ",typeof(doctor));
    // console.log(newBook);
    axios.post(myURL + `/patient/book`, {username,fullname,address,phone,city,blood,gender,
      date,time,department,doctor})
    .then(response => {
      console.log(response.data.message);
      getAppointment();
    });
  }

  function getAppointment() {
    axios.get(myURL + `/patient/appointment`)
    .then((response) => {
      // console.log("this is all appointment: ",response.data);
      setAppointments(response.data);
    })
    .catch((error) => {
      console.log(error);
    })
  }
  // console.log(patients);

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
        bookAppointment: bookAppointment,
        appointments: appointments
      }}
    >
      {props.children}
    </HSMContext.Provider>
  );
};

export { HSMContext, HSMProvider };
