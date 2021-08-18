import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import myURL from "./myURL";

const HSMContext = createContext();

const HSMProvider = (props) => {
  const [patients, setPatients] = useState();
  const [appointments, setAppointments] = useState();
  const [userinfo, setUserinfo] = useState(null);
  const [islogin, setIslogin] = useState(false);
  const [summary, setSummary] = useState([]);

  useEffect(() => {
    getAllPatient();
    getAppointment();
  }, [islogin]);

  useEffect(() => {
    setTimeout(() => {
      getSummary();
    }, 10000);
  }, []);

  /////covid19
  function getSummary() {
    axios.get(`https://api.covid19api.com/summary`).then((response) => {
      setSummary(response.data);
      console.log("context: ", summary);
    });
  }

  ///////
  function getAllPatient() {
    axios
      .get(myURL + `/patient`)
      .then((response) => {
        setPatients(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function loginSuccess(tam) {
    setUserinfo(tam);
    setIslogin(true);
    setTimeout(() => {
      getSummary();
    }, 10000);
  }
  function logout() {
    setIslogin(false);
    setUserinfo(null);
  }

  function updateInfo(_id, newInfo) {
    axios.put(myURL + `/patient/` + _id, newInfo).then((response) => {
      getAllPatient();
    });
  }

  function bookAppointment(date, time, department, doctor) {
    const filterUser = patients.find(
      (patient) => patient.username === userinfo[0].username
    );
    var username = userinfo[0].username;
    var fullname = filterUser.fullname;
    var address = filterUser.address;
    var phone = filterUser.phone;
    var city = filterUser.city;
    var blood = filterUser.blood;
    var gender = filterUser.gender;
    axios
      .post(myURL + `/patient/book`, {
        username,
        fullname,
        address,
        phone,
        city,
        blood,
        gender,
        date,
        time,
        department,
        doctor,
      })
      .then((response) => {
        alert(response.data.message);
        getAppointment();
      });
  }

  function getAppointment() {
    axios
      .get(myURL + `/patient/appointment`)
      .then((response) => {
        setAppointments(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function cancelAppointment(idcancel) {
    axios
      .delete(myURL + `/patient/` + idcancel)
      .then((response) => {
        getAppointment();
        alert(response.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  }

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
        appointments: appointments,
        cancelAppointment: cancelAppointment,
        summary,
      }}
    >
      {props.children}
    </HSMContext.Provider>
  );
};

export { HSMContext, HSMProvider };
